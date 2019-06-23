


namespace Savey.Web.Controllers
{   
    
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
    
    [Route("api/[controller]")]
     [ApiController]
    
    public class Transactions :Controller
    {
        private readonly IConnectionFactory _connectionFactory;

        public Transactions(IBaseRepository<Member> memberRepository, IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }
        

        [HttpPost]
        public async Task Create(Transaction transaction)
        {
            using (var connection=  this._connectionFactory.Create())
            {
                
            }
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
    }
}
    