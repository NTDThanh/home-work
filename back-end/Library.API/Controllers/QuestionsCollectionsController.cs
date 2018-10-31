using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EFCore.Domain;
using Library.API.Models.Question;
using Library.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [Route("api/questioncollections")]
    public class QuestionsCollectionsController : Controller
    {
        IQuestionRepository _questionRepository;
        public QuestionsCollectionsController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        [HttpPost]
        public IActionResult CreateQuestions([FromBody] IEnumerable<QuestionCreateDto> questions)
        {
            if (questions == null || !questions.Any())
            {
                return BadRequest();
            }
            var questionEnties = Mapper.Map<IEnumerable<Questions>>(questions);
            _questionRepository.AddManyQuestion(questionEnties);
            if (!_questionRepository.Save())
            {
                return StatusCode(500, "Đăng ký câu hỏi không thành công !");
            }
            return Ok();
        }
    }
}