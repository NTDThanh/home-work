﻿using System;
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
            if (question == null)
            {
                return BadRequest();
            }
            var questionEnties = Mapper.Map<Questions>(question);
            //_questionRepository.AddQuestion(question);
            return View();
        }
    }
}