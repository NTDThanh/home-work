using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Data;
using EFCore.Domain;

namespace Library.API.Services
{
    public class UserRepository : IUserRepository
    {
        HomeWorkContext _context;
        public UserRepository(HomeWorkContext context)
        {
            _context = context;
        }

        public void CreateUser()
        {
            throw new NotImplementedException();
        }

        public void CreateUser(Users user)
        {
            throw new NotImplementedException();
        }

        public void CreateUserGroup()
        {
            throw new NotImplementedException();
        }

        public Users GetUser(Guid userId)
        {
            return _context.Users.FirstOrDefault(x => x.Id.Equals(userId) && !x.IsDelete);
        }

        public IEnumerable<Users> GetUsers()
        {
            return _context.Users.ToArray();
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
