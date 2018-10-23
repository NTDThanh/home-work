using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFCore.Domain
{
    public class City
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CityCode { get; set; }
        [ConcurrencyCheck]
        public string NameFormated { get; set; }
        public string FullName { get; set; }
        //public List<County> County { get; set; }
        public DateTime? UpdateAt { get; set; }
        [Timestamp]
        public byte[] Timestamp { get; set; }
        public bool IsDelete { get; set; }

    }
}
