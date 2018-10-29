using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EFCore.Domain
{
    public class EntitiesBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public Guid? CreateBy { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? CreateAt { get; set; }
        public DateTime? UpdateAt { get; set; }
        public Guid? UpdateBy { get; set; }
        [Timestamp]
        public byte[] Timestamp { get; set; }
        public bool IsDelete { get; set; }
    }
}
