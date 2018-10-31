using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Exercises : EntitiesBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public virtual Skills Skills { get; set; }
        public virtual Levels Level { get; set; }
        public virtual List<ExercisesQuestions> ExercisesQuestions { get; set; }

        //Colum common
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