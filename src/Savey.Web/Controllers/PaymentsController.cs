using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Savey.Data.Entities;
using Savey.Data.Factories;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : Controller
    {
        private readonly IConnectionFactory _connectionFactory;

        public PaymentsController(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }

        // GET
        public async Task<ActionResult> Create(int memberId)
        {
            using (var connection = this._connectionFactory.Create())
            {
                var data = await connection.QueryAsync(
                    $"SELECT ID, DATE, AMOUNT, PERIOD, BALANCE, IS_PAYED, MEMBER_ID, ANNUAL_INTEREST, TYPE FROM SAVEY_APP.LOANS WHERE MEMBER_ID = {memberId}");
                var loan = data.Select(x => new Loan
                {
                    Amount = x.AMOUNT,
                    Date = x.DATE,
                    Id = x.ID,
                    AnnualInterest = x.ANNUAL_INTEREST,
                    Period = x.PERIOD,
                    IsPayed = x.IS_PAYED,
                    Balance = x.BALANCE,
                    LoanType = x.TYPE
                }).First();

                var payment = new Payment
                {
                    Amount = loan.Amount / loan.Period,
                    Date = DateTime.Now,
                    Interest = (loan.AnnualInterest * loan.Amount) / 12,
                    MemberId = memberId,
                    LoanId = loan.Id
                };

                var parameters = new DynamicParameters();

                parameters.Add(":P_DATE", payment.Date, DbType.Date);
                parameters.Add(":P_INTERESTS", payment.Interest, DbType.Decimal);
                parameters.Add(":P_AMOUNT", payment.Amount, DbType.Decimal);
                parameters.Add(":P_LOAN_ID", payment.LoanId, DbType.Int32);

                await connection.ExecuteAsync("SAVEY_APP.CREATE_LOAN", parameters,
                    commandType: CommandType.StoredProcedure);

                return this.Json(payment);
            }
        }
    }
}