using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Questions : EntitiesBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Detail { get; set; }
        public int CountDown { get; set; }
        public string CorrectAnswerCode { get; set; }
        public string QuestionCode { get; set; }
        public virtual List<Comments> Comments { get; set; }
        public virtual List<Answers> Answers { get; set; }
        public virtual Skills Skills { get; set; }
        public virtual Levels Level { get; set; }
        public virtual List<ExercisesQuestions> ExercisesQuestions { get; set; }

        ////Colum common
        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public int CreateBy { get; set; }
        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public DateTime? CreateAt { get; set; }
        //public DateTime? UpdateAt { get; set; }
        //public int UpdateBy { get; set; }
        //public DateTime? LastUpdate { get; set; }
        //public bool IsDelete { get; set; }
    }
}
