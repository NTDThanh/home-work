using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Models.Exercise
{
    public class ExerciseCreateDto
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public Skill Skill { get; set; }
        public Level Level { get; set; }
        public Guid[] ExercisesQuestions { get; set; } //[Todo] chỗ này chắc phải là list question.
    }

    public class Skill
    {
        public string Id { get; set; }
    }

    public class Level
    {
        public string Name { get; set; }
        public string Id { get; set; }
    }

}
