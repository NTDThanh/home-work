using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using EFCore.Domain;
using Library.API.Helpers;
using Library.API.Models.Question;
using Library.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            //return Ok();

            var questionCollectionToReturn = Mapper.Map<IEnumerable<QuestionDto>>(questionEnties);
            var idAsString = string.Join(",", questionEnties.Select(x => x.Id));

            return CreatedAtRoute("GetQuestionCollection", new { ids = idAsString }, questionCollectionToReturn);
        }

        [HttpGet("{ids}", Name = "GetQuestionCollection")]
        //public IActionResult GetQuestionCollection(IEnumerable<Guid> ids)
        public IActionResult GetQuestionCollection(
            [ModelBinder(BinderType = typeof(ArrayModelBinder))] IEnumerable<Guid> ids
            )
        {
            if (ids == null)
            {
                return BadRequest();
            }

            var questionEntities = _questionRepository.GetCollectionQuestions(ids);

            if (ids.Count() != questionEntities.Count())
            {
                return NotFound();
            }

            var questionToReturn = Mapper.Map<IEnumerable<QuestionDto>>(questionEntities);

            return Ok(questionToReturn);
        }

        [HttpGet]
        public IActionResult GetQuestions()
        {
           var result =  _questionRepository.GetQuestions();
            return Ok(result);
        }
    }
}