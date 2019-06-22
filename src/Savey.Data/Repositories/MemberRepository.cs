using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Savey.Data.Entities;
using Savey.Data.Factories;


namespace Savey.Data.Repositories
{
    public class MemberRepository : IBaseRepository<Member>
    {
        private readonly IConnectionFactory _connectionFactory;

        public MemberRepository(IConnectionFactory connectionFactory)
        {
            this._connectionFactory = connectionFactory;
        }

        public async Task<IEnumerable<Member>> All()
        {
            using (var connection = this._connectionFactory.Create())
            {
                var data = await connection.QueryAsync("SELECT * FROM SAVEY_APP.LIST_MEMBERS");
                return data.Select(x => new Member
                {
                    Id = x.ID,
                    FirstName = x.FIRST_NAME,
                    FirstSurname = x.FIRST_SURNAME,
                    MiddleName = x.MIDDLE_NAME,
                    SecondSurname = x.SECOND_SURNAME,
                    StartDate = x.START_DATE
                });
            }
        }

        public async Task Create(Member entity)
        {

            using (var connection = _connectionFactory.Create())
            {
                var parameters = new DynamicParameters();

                parameters.Add(":P_FIRST_NAME", entity.FirstName, DbType.String);
                parameters.Add(":P_MIDDLE_NAME", entity.MiddleName, DbType.String);
                parameters.Add(":P_FIRST_SURNAME", entity.FirstSurname, DbType.String);
                parameters.Add(":P_SECOND_SURNAME", entity.SecondSurname, DbType.String);
                parameters.Add(":P_START_DATE", DateTime.Now, DbType.Date);

                await connection.ExecuteAsync("SAVEY_APP.CREATE_MEMBER", parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public Task Update(Member entity)
        {
            throw new System.NotImplementedException();
        }

        public Task Delete(Member entity)
        {
            throw new System.NotImplementedException();
        }
    }
}