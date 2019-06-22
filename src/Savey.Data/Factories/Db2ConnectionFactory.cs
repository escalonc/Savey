using System;
using System.Data;
using IBM.Data.DB2.Core;
using Microsoft.Extensions.Configuration;

namespace Savey.Data.Factories
{
    public class Db2ConnectionFactory : IConnectionFactory
    {
        private readonly IConfiguration _config;


        public Db2ConnectionFactory(IConfiguration config)
        {
            _config = config;
        }
        public IDbConnection Create()
        {
            return new DB2Connection(this._config.GetConnectionString("DefaultConnection"));
        }
    }
}