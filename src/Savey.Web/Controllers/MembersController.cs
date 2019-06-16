using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Savey.Data.Entities;

namespace Savey.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly SaveyContext _context;

        public MembersController(SaveyContext context)
        {
            this._context = context;
        }

        // GET
        public async Task<ActionResult<IEnumerable<Member>>> Get()
        {
            var members = await this._context.Members.ToListAsync();
            return members;
        }
    }
}