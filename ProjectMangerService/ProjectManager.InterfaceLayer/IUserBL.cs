using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

namespace ProjectManager.InterfaceLayer
{
    public interface IUserBL
    {
        Collection<CommonLibrary.Users> GetUsers();
        void AddUser(CommonLibrary.Users user);
        void UpdateUser(CommonLibrary.Users user);
        void DeleteUser(CommonLibrary.Users user);
    }
}
