using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace Library.API.Models.Question
{
    public class QuestionCreateDto
    {
        public string detail { get; set; }
        public string questionCode { get; set; }
        public string correctAnswerCode { get; set; }
        public string description { get; set; }
        public int countDown { get; set; }
        public AnswerDto[] answers { get; set; }
        public Guid createBy { get; set; }
        public Skills skills { get; set; }
        public Levels level { get; set; }
    }

    public class AnswerDto
    {
        public string answerCode { get; set; }
        public string detail { get; set; }
        public string note { get; set; }
    }

    
}




