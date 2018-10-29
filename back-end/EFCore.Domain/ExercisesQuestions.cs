using System;
using System.Collections.Generic;
using System.Text;

namespace EFCore.Domain
{
    public class ExercisesQuestions
    {
        public Guid ExercisesId { get; set; }
        public Exercises Exercises { get; set; }

        public Guid QuestionsId { get; set; }
        public Questions Questions { get; set; }

    }
}
