using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Savey.Data.Entities;
using Savey.Data.Factories;
using Savey.Data.Repositories;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : Controller
    {
        private readonly IBaseRepository<Member> _memberRepository;
        private readonly IConnectionFactory _connectionFactory;

        public MembersController(IBaseRepository<Member> memberRepository, IConnectionFactory connectionFactory)
        {
            this._memberRepository = memberRepository;
            this._connectionFactory = connectionFactory;
        }

        [HttpGet]
        public async Task<IEnumerable<Member>> Get()
        {
            var members = await this._memberRepository.All();
            return members;
        }

        [HttpPost]
        public async Task Create(Member member)
        {
            await this._memberRepository.Create(member);
        }

        [HttpGet("{id}/contributionBalance")]
        public async Task<Account> GetContributionAccountByMemberId(int id)
        {
            using (var connection = _connectionFactory.Create())
            {
                var account = await connection.QueryAsync(
                    $"select balance from SAVEY_APP.accounts where account_type = 'APT' and MEMBER_ID = {id}");
                return account.Select(x => new Account
                {
                    Balance = x.BALANCE,
                    AccountType = x.ACCOUNT_TYPE ?? "NOT"
                }).FirstOrDefault();
            }
        }
        
        [HttpGet("{id}/countExistingLoans")]
        public async Task<JsonResult> CountExistingLoans(int id)
        {
            using (var connection = this._connectionFactory.Create())
            {
                var count = await connection.QueryFirstAsync<int>(
                    $"SELECT COUNT(*) FROM SAVEY_APP.LOANS WHERE MEMBER_ID = {id}");

                return this.Json(new {count});
            }
        }
        
        [HttpGet("{id}/accounts")]
        public async Task<IEnumerable<Account>> GetAccounts(int id)
        {
            using (var connection = this._connectionFactory.Create())
            {
                var data = await connection.QueryAsync(
                    $"select ID, MEMBER_ID, OPENING_DATE, BALANCE, ACCOUNT_TYPE from SAVEY_APP.ACCOUNTS where MEMBER_ID = {id}");

                var accounts = data.Select(x => new Account
                {
                    Balance = x.BALANCE,
                    Id = x.ID,
                    AccountType = x.ACCOUNT_TYPE,
                    MemberId = x.MEMBER_ID,
                    OpeningDate = x.OPENING_DATE
                });

                return accounts;
            }
        }
    }
}