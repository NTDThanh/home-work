using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Comments
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Detail { get; set; }
        public Users Users { get; set; }
        public Questions Questions { get; set; }
        public Exercises Exercises { get; set; }
        public Courses Courses { get; set; }
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
