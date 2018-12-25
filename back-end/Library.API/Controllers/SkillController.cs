using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EFCore.Domain;
using Library.API.Models.Category;
using Library.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [Route("api/skills")]
    public class SkillController : Controller
    {
        ICategoryRepository _categoryRepository;
        public SkillController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public IActionResult GetSkill()
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult CreateSkill([FromBody] SkillDto skill)
        {
            if (skill == null) { return BadRequest(); }
            var newSkill = Mapper.Map<Skills>(skill);
            _categoryRepository.CreateSkill(newSkill);
            if (!_categoryRepository.Save()) {
                return StatusCode(500, "Đăng ký skill không thành công !");
            }

            return Ok();
        }
    }
}