using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Services
{
    public interface ICategoryRepository
    {
        #region Skill
        IEnumerable<Skills> GetSkills();
        IEnumerable<Skills> GetChildrenSkills(Guid skillId);
        void CreateSkill(Skills skills);
        void DeleteSkill(Skills skills);
        #endregion
        #region Level
        IEnumerable<Levels> GetLevels();
        void CreateLevel(Levels levels);
        void DeleteLevel(Levels levels);
        #endregion
        bool Save();
    }
}
