using System;
using System.Collections.Generic;
using System.Text;

namespace EFCore.Domain
{
    public class ExercisesQuestions
    {
        public int ExercisesId { get; set; }
        public Exercises Exercises { get; set; }

        public int QuestionsId { get; set; }
        public Questions Questions { get; set; }

    }
}
