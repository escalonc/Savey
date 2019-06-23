using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Savey.Data.Entities;
using Savey.Data.Factories;
using Savey.Data.Repositories;
using Savey.Web.ViewModels;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoansController : Controller
    {
        private readonly IBaseRepository<Loan> _loanRepository;
        private readonly IConnectionFactory _connectionFactory;

        public LoansController(IBaseRepository<Loan> loanRepository, IConnectionFactory connectionFactory)
        {
            this._loanRepository = loanRepository;
            this._connectionFactory = connectionFactory;
        }

        // GET
        public async Task<IEnumerable<Loan>> Get()
        {
            return await this._loanRepository.All();
        }

        [HttpPost]
        public async Task Create(LoanViewModel loan)
        {
            var newLoan = new Loan
            {
                Amount = loan.Amount,
                Balance = loan.Amount * ((loan.AnnualInterest/100) + 1),
                Date = DateTime.Now,
                Period = loan.Period,
                AnnualInterest = loan.AnnualInterest,
                IsPayed = false,
                MemberId = loan.MemberId,
                LoanType = loan.LoanType
            };
            await this._loanRepository.Create(newLoan);
        }
    }
}