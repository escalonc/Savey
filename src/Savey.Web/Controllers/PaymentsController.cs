using System.Data;
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
//        public async Task<ActionResult> Create(Payment payment)
//        {
//            using (var connection = this._connectionFactory.Create())
//            {
//                var parameters = new DynamicParameters();
//
////                parameters.Add(":P_DATE", entity.Date, DbType.Date);
////                parameters.Add(":P_AMOUNT", entity.Amount, DbType.Decimal);
////                parameters.Add(":P_PERIOD", entity.Period, DbType.Int32);
////                parameters.Add(":P_ANNUAL_INTEREST", entity.AnnualInterest, DbType.Decimal);
////                parameters.Add(":P_BALANCE", entity.Balance, DbType.Decimal);
////                parameters.Add(":P_MEMBER_ID", entity.MemberId, DbType.Int32);
////                parameters.Add(":P_TYPE", entity.LoanType, DbType.String);
//
//                await connection.ExecuteAsync("SAVEY_APP.CREATE_LOAN", parameters, commandType: CommandType.StoredProcedure);
//            }
//        }
    }
}