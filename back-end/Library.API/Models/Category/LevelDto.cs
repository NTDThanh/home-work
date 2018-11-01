using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Models.Category
{
    public class LevelDto
    {
        public Guid parentId { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string description { get; set; }
    }
}
