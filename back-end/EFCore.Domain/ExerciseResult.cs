﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class ExerciseResult
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Point { get; set; }
        public string Rank { get; set; }
        public virtual List<Users> User { get; set; }
        public virtual List<Questions> Questions { get; set; }
        public virtual List<Exercises> Exercises { get; set; }
        public virtual List<Answers> Answer { get; set; }

        //Colum common
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public int CreateBy { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? CreateAt { get; set; }
        public DateTime? UpdateAt { get; set; }
        public int UpdateBy { get; set; }
        public DateTime? LastUpdate { get; set; }
        public bool IsDelete { get; set; }
    }
}
