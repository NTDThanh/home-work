﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Questions
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string Detail { get; set; }
        public string CountDown { get; set; }
        public Comments Comments { get; set; }
        public Answers Answers { get; set; }
        public Skills Skills { get; set; }
        public Levels Level { get; set; }
        public Exercises Exercises { get; set; }
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
