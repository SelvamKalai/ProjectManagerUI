using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.InterfaceLayer;
using ProjectManager.DataAccessLayer;
using System.Collections.ObjectModel;
using ProjectManager.CommonLibrary;
using System.Data.Entity;

namespace ProjectManager.BusinessLayer
{        
     public class UserBL : IUserBL
     {
        private readonly ProjectManagerEntities _projectManager;

        public UserBL()
        {
            _projectManager = new ProjectManagerEntities();
        }

        public UserBL(ProjectManagerEntities projectManager)
        {
            _projectManager = projectManager;
        }

        public Collection<CommonLibrary.Users> GetUsers()
        {
            Collection<CommonLibrary.Users> userCollection = new Collection<CommonLibrary.Users>();
            _projectManager.
                Users.Select(u => new CommonLibrary.Users()
                {
                    UserID = u.UserID,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    EmployeeID = u.EmployeeID
                }).ToList()
                .ForEach(y => userCollection.Add(y));

            return userCollection;
        }
        public void AddUser(CommonLibrary.Users user)
        {
            DataAccessLayer.User usr = new DataAccessLayer.User
            {
                UserID = user.UserID,
                FirstName = user.FirstName,
                LastName = user.LastName,
                EmployeeID = user.EmployeeID
            };

            _projectManager.Users.Add(usr);
            _projectManager.SaveChanges();
           
        }

        public void UpdateUser(CommonLibrary.Users user)
        {
            var usr = _projectManager.Users.Where(x => x.UserID == user.UserID).FirstOrDefault();
            if (usr != null)
            {
                usr.UserID = user.UserID;
                usr.FirstName = user.FirstName;
                usr.LastName = user.LastName;
                usr.EmployeeID = user.EmployeeID;
                _projectManager.SaveChanges();
            }
        }

        public void DeleteUser(CommonLibrary.Users user)
        {
            DataAccessLayer.User usr = new DataAccessLayer.User
            {
                UserID = user.UserID
            };
            _projectManager.Entry(usr).State = EntityState.Deleted;
            _projectManager.SaveChanges();
        
        }        

       
    }
}
