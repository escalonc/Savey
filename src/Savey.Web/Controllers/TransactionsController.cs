using System.Data;
using Savey.Web.ViewModels;

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
    public class Transactions : Controller
    {
        private readonly IConnectionFactory _connectionFactory;

        public Transactions(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }

        [HttpPost]
        public async Task Create(TransactionsModel trasanction)
        {
            using (var connection = _connectionFactory.Create())
            {
                var parameters = new DynamicParameters();

                parameters.Add(":P_DATE", DateTime.Now, DbType.Date);
                parameters.Add(":P_AMOUNT", trasanction.Amount, DbType.Decimal);
                parameters.Add(":P_TYPE", trasanction.Type, DbType.String);

                parameters.Add(":P_DESCRIPTION", trasanction.Description, DbType.String);
                parameters.Add(":P_ACCOUNT_ID", trasanction.AccountId, DbType.Int32);

                await connection.ExecuteAsync("SAVEY_APP.CREATE_TRASACTIONS", parameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        [HttpGet("{id}/accountExistingTransaction")]
        public async Task<JsonResult> AccountExistingTransaction(int id)
        {
            using (var connection = this._connectionFactory.Create())
            {
                var count = await connection.QueryFirstAsync<int>(
                    $"SELECT COUNT(*) FROM SAVEY_APP.ACCOUNTS WHERE ID = {id}");

                return this.Json(new {count});
            }
        }

        
    }
}