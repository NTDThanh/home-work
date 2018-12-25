using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace Library.API.Models.Question
{
    [DataContract]
    public class QuestionDto
    {
        [DataMember(Name = "id")]
        public Guid Id { get; set; }
        [DataMember(Name = "detail")]
        public string Detail { get; set; }
        [DataMember(Name = "questionCode")]
        public string QuestionCode { get; set; }
        [DataMember(Name = "correctAnswerCode")]
        public string CorrectAnswerCode { get; set; }
        [DataMember(Name = "description")]
        public string Description { get; set; }
        [DataMember(Name = "countDown")]
        public int CountDown { get; set; }
    }
}
