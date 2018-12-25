using AutoMapper;
using EFCore.Domain;
using Library.API.Models.Question;
using Library.API.Services;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.API.Controllers
{
    [Route("api/questions")]
    public class QuestionController : Controller
    {
        IQuestionRepository _questionRepository;
        public QuestionController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        [HttpPost]
        public IActionResult CreateQuestion([FromBody] QuestionCreateDto question)
        {
            //comment
            if (question == null)
            {
                return BadRequest();
            }
            var questionEnties = Mapper.Map<Questions>(question);
            _questionRepository.AddQuestion(questionEnties);
            if (!_questionRepository.Save())
            {
                return StatusCode(500, "Đăng ký câu hỏi không thành công !");
            }
            return Ok(questionEnties);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateQuestion(Guid id, [FromBody] QuestionUpdateDto question)
        {
            if (question == null)
                return BadRequest();

            var questionFromRepo = _questionRepository.GetQuestion(id);
            if (questionFromRepo == null)
            {
                var questionAdd = Mapper.Map<Questions>(question);
                questionAdd.Id = id;
                _questionRepository.AddQuestion(questionAdd);
                if (!_questionRepository.Save())
                {
                    throw new Exception($"Create question {id} for question failse on save");
                }

                var questionReturn = Mapper.Map<QuestionDto>(questionAdd);

                return CreatedAtRoute("GetQuestion", new { id = questionAdd.Id }, questionReturn);
            }

            Mapper.Map(question, questionFromRepo);

            _questionRepository.UpdateQuestion(questionFromRepo);

            if (!_questionRepository.Save())
            {
                throw new Exception($"Updating question {id} for question failse on save");
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult PartiallyUpdateQuestion(Guid id, [FromBody] JsonPatchDocument<QuestionUpdateDto> pathQuestion)
        {
            if (pathQuestion == null)
                return BadRequest();

            var questionFromRepo = _questionRepository.GetQuestion(id);
            if (questionFromRepo == null)
            {
                var questionDto = new QuestionUpdateDto();
                pathQuestion.ApplyTo(questionDto);

                var questionAdd = Mapper.Map<Questions>(questionDto);
                questionAdd.Id = id;

                _questionRepository.AddQuestion(questionAdd);
                if (!_questionRepository.Save())
                {
                    throw new Exception($"Updating question {id} for question failse on save");
                }
                var questionReturn = Mapper.Map<QuestionDto>(questionAdd);
                return CreatedAtRoute("GetQuestion", new { id = questionAdd.Id }, questionReturn);
            }

            var questionToPatch = Mapper.Map<QuestionUpdateDto>(questionFromRepo);
            pathQuestion.ApplyTo(questionToPatch);

            Mapper.Map(questionToPatch, questionFromRepo);
            _questionRepository.UpdateQuestion(questionFromRepo);

            if (!_questionRepository.Save())
            {
                throw new Exception($"Updating question {id} for question failse on save");
            }

            return NoContent();
        }

        [HttpGet("{id}", Name = "GetQuestion")]
        public IActionResult GetQuestion(Guid id)
        {
            var questionFromRepo = _questionRepository.GetQuestion(id);
            if (questionFromRepo != null)
            {
                return Ok(questionFromRepo);
            }
            return NotFound();
        }
    }
}