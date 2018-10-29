using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class UserLogin : EntitiesBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Users User { get; set; }
        public DateTime LogAt { get; set; }
        public string AuthenticationCode { get; set; }
        public string LoginStatus { get; set; }
        public string Ip { get; set; }
        public string Device { get; set; }

        //Colum common
        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public int CreateBy { get; set; }
        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //public DateTime? CreateAt { get; set; }
        //public DateTime? UpdateAt { get; set; }
        //public int? UpdateBy { get; set; }
        //public DateTime? LastUpdate { get; set; }
        //public bool IsDelete { get; set; }
    }
}
