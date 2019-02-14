using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Models.Exercise
{
    public class ExerciseDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string Image { get; set; }

        public virtual Skills Skills { get; set; }

        public virtual Levels Level { get; set; }

        public DateTime CreateAt { get; set; }

        public Users Users { get; set; }

        public virtual List<ExercisesQuestions> ExercisesQuestions { get; set; }
    }
}
