using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public string Slat { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Phone { get; set; }
        public virtual List<Skills> Skills { get; set; }
        public virtual List<UserGroup> UserGroup { get; set; }

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
