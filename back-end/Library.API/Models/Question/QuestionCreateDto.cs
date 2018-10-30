using System;
using System.Collections.Generic;
using System.Linq;
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
        public AnswerDto[] answer { get; set; }
    }
    public class AnswerDto
    {
        public string answerCode { get; set; }
        public string detail { get; set; }
        public string note { get; set; }
    }
}




