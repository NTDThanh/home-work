using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Services
{
    public interface IUserRepository
    {
        IEnumerable<Users> GetUsers();
        Users GetUser(Guid userId);
        void CreateUser(Users user);
        void CreateUserGroup();
        bool Save();
    }
}
