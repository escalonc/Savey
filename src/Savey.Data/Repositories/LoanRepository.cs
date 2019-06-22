using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using Savey.Data.Entities;
using Savey.Data.Factories;

namespace Savey.Data.Repositories
{
    public class LoanRepository : IBaseRepository<Loan>
    {
        private readonly IConnectionFactory _connectionFactory;

        public LoanRepository(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }


        public Task<IEnumerable<Loan>> All()
        {
            throw new System.NotImplementedException();
        }

        public async Task Create(Loan entity)
        {
            using (var connection = _connectionFactory.Create())
            {
                var parameters = new DynamicParameters();

                parameters.Add(":P_DATE", entity.Date, DbType.Date);
                parameters.Add(":P_AMOUNT", entity.Amount, DbType.Decimal);
                parameters.Add(":P_PERIOD", entity.Period, DbType.Int32);
                parameters.Add(":P_ANNUAL_INTEREST", entity.AnnualInterest, DbType.Decimal);
                parameters.Add(":P_BALANCE", entity.Balance, DbType.Decimal);
                parameters.Add(":P_MEMBER_ID", entity.MemberId, DbType.Int32);
                parameters.Add(":P_TYPE", entity.LoanType, DbType.String);

                await connection.ExecuteAsync("SAVEY_APP.CREATE_LOAN", parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public Task Update(Loan entity)
        {
            throw new System.NotImplementedException();
        }

        public Task Delete(Loan entity)
        {
            throw new System.NotImplementedException();
        }
    }
}