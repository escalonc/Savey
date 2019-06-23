using System;
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
    [ApiController]
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
                    $"SELECT * FROM SAVEY_APP.VIEW_MEMBER WHERE YEAR(START_DATE) = {year}");
                var report = data.Select(x => new MemberReport
                {
                    Investment = x.INVESTMENT,
                    Member = x.MEMBER,
                    Saving = x.SAVING,
                    Total = x.TOTAL,
                    MemberId = x.MEMBER_ID,
                    StartDate = x.START_DATE
                });
                    
                return report;
            }
        }
    }
}