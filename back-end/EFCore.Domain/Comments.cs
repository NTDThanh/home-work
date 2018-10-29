using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Comments : EntitiesBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Detail { get; set; }
        public virtual Users Users { get; set; }
        public virtual Questions Questions { get; set; }
        public virtual Exercises Exercises { get; set; }
        public virtual Courses Courses { get; set; }

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
