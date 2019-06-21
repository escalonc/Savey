using Microsoft.AspNetCore.Mvc;

namespace Savey.Web.Controllers
{
    public class AccountController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}