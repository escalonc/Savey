
 
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Savey.Data.Factories;
using System.Threading.Tasks;
using Dapper;
using Savey.Data.Entities;
using Savey.Web.ViewModels;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
        public class MemberReportController : ControllerBase
        {
            private readonly IConnectionFactory _connectionFactory;

            public MemberReportController(IConnectionFactory connectionFactory)
            {
                this._connectionFactory = connectionFactory;
            }

            [HttpGet("members/year/{year}")]
            public async Task<IEnumerable<MemberReport>> MembersReport(int year)
            {
                using (var connection = this._connectionFactory.Create())
                {
                    var data = await connection.QueryAsync(
                        $"SELECT * FROM SAVEY_APP.VIEW_MEMBER WHERE YEAR = {year}");
                    var report = data.Select(x => new MemberReport()
                    {
                       Investment = x.Investment,
                       Member = x.Member,
                       Saving = x.Saving,
                       Total = x.Total,
                       MemberId = x.MemberId,
                       StartDate = x.StartDate
                    });

                    return report;
                }
            }
        }
    }
    
