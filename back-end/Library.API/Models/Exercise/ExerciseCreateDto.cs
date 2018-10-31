using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Models.Exercise
{
    public class ExerciseCreateDto
    {
        public string name { get; set; }
        public string image { get; set; }
        public Skill skill { get; set; }
        public Level level { get; set; }
        public Guid[] exercisesQuestions { get; set; } //[Todo] chỗ này chắc phải là list question.
    }

    public class Skill
    {
        public string id { get; set; }
    }

    public class Level
    {
        public string name { get; set; }
        public string id { get; set; }
    }

}
