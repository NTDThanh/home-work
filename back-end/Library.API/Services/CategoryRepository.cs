using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Data;
using EFCore.Domain;

namespace Library.API.Services
{
    public class CategoryRepository : ICategoryRepository
    {
        HomeWorkContext _context;
        public CategoryRepository(HomeWorkContext homeWorkContext)
        {
            _context = homeWorkContext;
        }

        public void CreateLevel(Levels levels)
        {
            _context.Add(levels);
        }

        public void CreateSkill(Skills skills)
        {
            _context.Add(skills);
        }

        public void DeleteLevel(Levels levels)
        {
            _context.Remove(levels);
        }

        public void DeleteSkill(Skills skills)
        {
            _context.Remove(skills);
        }

        public IEnumerable<Skills> GetChildrenSkills(Guid skillId)
        {
            return _context.Skills.Where(x => x.Id.Equals(skillId)).ToArray();
        }

        public IEnumerable<Levels> GetLevels()
        {
            return _context.Levels.ToArray();
        }

        public IEnumerable<Skills> GetSkills()
        {
            return _context.Skills.ToArray();
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
