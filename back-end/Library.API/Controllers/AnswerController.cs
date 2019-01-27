using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [Route("api/questions/{questionId}/answer")]
    public class AnswerController : Controller
    {
        [HttpDelete("{id}")]
        public IActionResult DeleteAnswer(string questionId, string Id)
        {

            return NoContent();
        }
    }
}