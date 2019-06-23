using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Savey.Data.Factories;
using System.Threading.Tasks;
using Dapper;
using Savey.Web.ViewModels;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly IConnectionFactory _connectionFactory;

        public AccountsController(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }

        [HttpGet("dividends/{year}")]
        public async Task<IEnumerable<DividendsReport>> DividendsReport(int year)
        {
            using (var connection = this._connectionFactory.Create())
            {
                var data = await connection.QueryAsync(
                    $"SELECT * FROM SAVEY_APP.EARNINGS_REPORT_VIEW WHERE YEAR = {year}");
                var report = data.Select(x => new DividendsReport
                {
                    Balance = x.BALANCE,
                    Earnings = x.EARNINGS,
                    Member = x.MEMBER,
                    Month = x.MONTH,
                    Year = x.YEAR,
                    EarningsPercentage = x.EARNINGS_PERCENTAGE,
                    MemberId = x.MEMBER_ID
                });

                return report;
            }
        }
    }
}