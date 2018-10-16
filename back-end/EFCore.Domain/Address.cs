using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCore.Domain
{
    public class Address
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AddressNo { get; set; }
        public string AddressName { get; set; }
        public County County { get; set; }
        public City City { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? UpdateAt { get; set; }
        [Timestamp]
        public byte[] Timestamp { get; set; }
        public bool IsDelete { get; set; }
    }
}
