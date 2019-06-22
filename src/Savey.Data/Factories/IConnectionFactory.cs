using System.Data;

namespace Savey.Data.Factories
{
    public interface IConnectionFactory
    {
        IDbConnection Create();
    }
}