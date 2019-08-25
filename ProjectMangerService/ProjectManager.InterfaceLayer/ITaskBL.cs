using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

namespace ProjectManager.InterfaceLayer
{
    public interface ITaskBL
    {
        void AddTasks(CommonLibrary.Tasks task);
        void AddParentTask(CommonLibrary.ParentTasks pTask);
        Collection<CommonLibrary.ParentTasks> GetParentTasks();
        Collection<CommonLibrary.Tasks> GetTasks(int ProjectID);
        void EndTask(CommonLibrary.Tasks task);
        void UpdateTask(CommonLibrary.Tasks task);
    }
}
