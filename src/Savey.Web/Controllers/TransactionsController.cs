


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
    
    public class Transactions :Controller
    {
        private readonly IConnectionFactory _connectionFactory;

        public Transactions(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }

        

//        [HttpPost]
//        public async Task Create(TransactionsModel x)
//        {
//            var newLoan = new Loan()
//            {
//               
//            };
//            await this.TransactionsModel.Create(newLoan);
//        }
//        
        
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
    