using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Savey.Data.Entities;

namespace Savey.Data.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {

        /// <summary>
        /// When is override in a deriver type, returns all the elements in the entity set.
        /// </summary>
        /// <returns>
        /// An <see cref="IQueryable"/> for all the elements in the entity set
        /// </returns>
        Task<IEnumerable<TEntity>> All();

        /// <summary>
        /// Marks the entity as added
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <returns>
        /// The entity with its state marked as added.
        /// </returns>
        Task Create(TEntity entity);

        /// <summary>
        /// Marks the entity as modified.
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <returns>
        /// The entity with its state marked as modified.
        /// </returns>
        Task Update(TEntity entity);

        /// <summary>
        /// Marks the entity as deleted.
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <returns>
        /// The entity with its state marked as deleted.
        /// </returns>
        Task Delete(TEntity entity);
    }
}