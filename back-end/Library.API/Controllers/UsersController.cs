using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Domain;
using Library.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _userRepository.GetUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest();
            }

            var user = _userRepository.GetUser(id);
            return Ok(user);
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody]Users user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            
            _userRepository.CreateUser(user);
            if (!_userRepository.Save())
            {
                throw new Exception("Creating an author failed on save.");
                // return StatusCode(500, "A problem happened with handling your request.");
            }
            return Ok();
        }
    }
}