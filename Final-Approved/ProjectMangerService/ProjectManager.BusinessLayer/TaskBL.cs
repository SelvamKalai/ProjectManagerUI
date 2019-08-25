using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.CommonLibrary;
using ProjectManager.DataAccessLayer;
using ProjectManager.InterfaceLayer;

namespace ProjectManager.BusinessLayer
{
    public class TaskBL : ITaskBL
    {

        private readonly ProjectManagerEntities _projectManager;

        public TaskBL()
        {
            _projectManager = new ProjectManagerEntities();
        }
        public TaskBL(ProjectManagerEntities projectManager)
        {
            _projectManager = projectManager;
        }

        public Collection<CommonLibrary.ParentTasks> GetParentTasks()
        {
            Collection<CommonLibrary.ParentTasks> parentTaskCollection = new Collection<CommonLibrary.ParentTasks>();
            _projectManager.ParentTasks
                .Select(pt => new CommonLibrary.ParentTasks()
                {
                    ParentTaskID = pt.ParentTaskID,
                    ParentTask = pt.ParentTask1

                }).ToList()
                .ForEach(y => parentTaskCollection.Add(y));
            return parentTaskCollection;
        }

        public Collection<CommonLibrary.Tasks> GetTasks(int ProjectID)
        {
            Collection<CommonLibrary.Tasks> taskCollection = new Collection<CommonLibrary.Tasks>();

            _projectManager.Tasks.Where(c => c.ParentTaskID == null && c.ProjectID == ProjectID)
                .Select(s => new CommonLibrary.Tasks
                {
                    Task = s.Task1,
                    ProjectID = s.ProjectID,
                    Project = _projectManager.Projects.Where(u => u.ProjectID == s.ProjectID)
                    .Select(u => u.Project1).FirstOrDefault(),
                    ParentTask = "",
                    Priority = s.Prioriy,
                    StartDate = s.StartDate,
                    EndDate = s.EndDate,
                    TaskID = s.TaskID,
                    Status = s.Status,
                    UserID = _projectManager.Users.Where(u => u.TaskID == s.TaskID)
                    .Select(u => u.UserID).FirstOrDefault(),
                    UserName = _projectManager.Users.Where(u => u.TaskID == s.TaskID)
                    .Select(u => u.FirstName + " " + u.LastName).FirstOrDefault()
                }).ToList()
                .ForEach(m => taskCollection.Add(m));


            _projectManager.Tasks.Where(c => c.ParentTaskID != null && c.ProjectID == ProjectID)
                .Join(_projectManager.ParentTasks, f => f.ParentTaskID, s => s.ParentTaskID,
                (f,s) => new CommonLibrary.Tasks
                {
                    Task = f.Task1,
                    ProjectID = f.ProjectID,
                    Project = _projectManager.Projects.Where(u => u.ProjectID == f.ProjectID)
                    .Select(u => u.Project1).FirstOrDefault(),
                    ParentTask = s.ParentTask1,
                    Priority = f.Prioriy,
                    StartDate = f.StartDate,
                    EndDate = f.EndDate,
                    ParentTaskID = s.ParentTaskID,
                    TaskID = f.TaskID,
                    Status = f.Status,
                    UserID = _projectManager.Users.Where(u => u.TaskID == f.TaskID)
                    .Select(u => u.UserID).FirstOrDefault(),
                    UserName = _projectManager.Users.Where(u => u.TaskID == f.TaskID)
                    .Select(u => u.FirstName + " " + u.LastName).FirstOrDefault()
                }).ToList()
                .ForEach(m => taskCollection.Add(m));

            return taskCollection;
        }
        
        public void AddParentTask(CommonLibrary.ParentTasks pTask)
        {
            DataAccessLayer.ParentTask pt = new DataAccessLayer.ParentTask
            {
                ParentTask1 = pTask.ParentTask
            };
            _projectManager.ParentTasks.Add(pt);
            _projectManager.SaveChanges();
        }

        public void AddTasks(CommonLibrary.Tasks task)
        {
            DataAccessLayer.Task tsk = new DataAccessLayer.Task
            {
                Task1 = task.Task,
                ProjectID = task.ProjectID,
                Prioriy = task.Priority,
                StartDate = task.StartDate,
                EndDate = task.EndDate,
                Status = false
            };

            if (task.ParentTaskID == 0)
            {
                tsk.ParentTaskID = null;
            }
            else
            {
                tsk.ParentTaskID = task.ParentTaskID;
            }

            _projectManager.Tasks.Add(tsk);
            _projectManager.SaveChanges();

            var taskId = tsk.TaskID;
            var usr = _projectManager.Users.Where(u => u.UserID == task.UserID).FirstOrDefault();
            if (usr != null)
            {
                usr.TaskID = taskId;
                _projectManager.SaveChanges();
            }
        }

        public void EndTask(CommonLibrary.Tasks task)
        {
            var tsk = _projectManager.Tasks.Where(x => x.TaskID == task.TaskID).FirstOrDefault();

            if(tsk != null)
            {
                tsk.Status = true;
                _projectManager.SaveChanges();
            }
        }      

        public void UpdateTask(CommonLibrary.Tasks task)
        {
            var tsk = _projectManager.Tasks.Where(x => x.TaskID == task.TaskID).FirstOrDefault();

            if (tsk != null)
            {
                tsk.Task1 = task.Task;
                tsk.ProjectID = task.ProjectID;
                tsk.Prioriy = task.Priority;
                tsk.StartDate = task.StartDate;
                tsk.EndDate = task.EndDate;
                if (task.ParentTaskID == 0)
                {
                    tsk.ParentTaskID = null;
                }
                else
                {
                    tsk.ParentTaskID = task.ParentTaskID;
                }

                _projectManager.SaveChanges();

                var usr = _projectManager.Users.Where(x => x.UserID == task.UserID).FirstOrDefault();
                if (usr != null)
                {
                    usr.TaskID = tsk.TaskID;
                    _projectManager.SaveChanges();
                }
            }
        }
    }
}
