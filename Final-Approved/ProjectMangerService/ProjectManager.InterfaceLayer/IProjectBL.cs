using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

namespace ProjectManager.InterfaceLayer
{
    public interface IProjectBL
    {
        Collection<CommonLibrary.Projects> GetProjects();
        void AddProject(CommonLibrary.Projects project);
        void UpdateProject(CommonLibrary.Projects project);
        void SuspendProject(int ProjectID);
    }
}
