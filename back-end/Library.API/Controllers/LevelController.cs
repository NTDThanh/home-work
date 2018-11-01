using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [Route("api/levels")]
    public class LevelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}