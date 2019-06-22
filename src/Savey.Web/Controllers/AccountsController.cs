using System.Linq.Expressions;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Savey.Data.Entities;
using Savey.Data.Factories;

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
        
    }


}