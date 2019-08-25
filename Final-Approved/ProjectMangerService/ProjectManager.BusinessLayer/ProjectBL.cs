using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.CommonLibrary;
using ProjectManager.DataAccessLayer;
using ProjectManager.InterfaceLayer;
using System.Collections.ObjectModel;
using System.Data.Entity;

namespace ProjectManager.BusinessLayer
{
    public class ProjectBL : IProjectBL
    {
        private readonly ProjectManagerEntities _projectManager;

        public ProjectBL()
        {
            _projectManager = new ProjectManagerEntities();
        }

        public ProjectBL(ProjectManagerEntities projectManager)
        {
            _projectManager = projectManager;
        }
        public void AddProject(CommonLibrary.Projects project)
        {
            DataAccessLayer.Project proj = new DataAccessLayer.Project
            {
                Project1 = project.Project,
                StartDate = project.StartDate,
                EndDate = project.EndDate,
                Prioriy = project.Priority
            };

            _projectManager.Projects.Add(proj);
            _projectManager.SaveChanges();

            var ProjId = proj.ProjectID;
            var usr = _projectManager.Users.Where(x => x.UserID == project.ManagerID).FirstOrDefault();
            if(usr != null)
            {
                usr.ProjectID = ProjId;
                _projectManager.SaveChanges();
            }


        }

        public Collection<CommonLibrary.Projects> GetProjects()
        {
            Collection<CommonLibrary.Projects> projectCollection = new Collection<CommonLibrary.Projects>();

            _projectManager.Projects.SelectMany
                (
                proj => _projectManager.Users.Where(user => proj.ProjectID == user.ProjectID).DefaultIfEmpty(),
                (x, y) => new
                {
                    Projects = x,
                    Users = y
                }
                ).ToList()
                .ForEach(y => projectCollection.Add(
                   new CommonLibrary.Projects
                   {
                       ProjectID = y.Projects.ProjectID,
                       Project = y.Projects.Project1,
                       StartDate = y.Projects.StartDate,
                       EndDate = y.Projects.EndDate,
                       Priority = y.Projects.Prioriy,
                       NoOfTasks = _projectManager.Tasks.Where(x => x.ProjectID == y.Projects.ProjectID).Count(),
                       NoOfCompletedTasks = _projectManager.Tasks.Where(x => x.ProjectID == y.Projects.ProjectID && x.Status == true).Count(),
                       ManagerID = y.Users != null ? y.Users.UserID : 0,
                       ManagerName = y.Users != null ? y.Users.FirstName + " " + y.Users.LastName : ""
                   }
                   ));

            return projectCollection;
        }

        public void SuspendProject(int ProjectID)
        {
            DataAccessLayer.Project proj = new DataAccessLayer.Project
            {
                ProjectID = ProjectID
            };

            var user = _projectManager.Users.Where(x => x.ProjectID == ProjectID).FirstOrDefault();
            if (user != null)
            {
                user.ProjectID = null;
            }
            _projectManager.Entry(proj).State = EntityState.Deleted;
            _projectManager.SaveChanges();
        }

        public void UpdateProject(CommonLibrary.Projects project)
        {
            var proj = _projectManager.Projects.Where(x => x.ProjectID == project.ProjectID).FirstOrDefault();
            var user = _projectManager.Users.Where(x => x.UserID == project.ManagerID).FirstOrDefault();
            var extUser = _projectManager.Users.Where(x => x.ProjectID == project.ProjectID).FirstOrDefault();

            if (proj != null && user != null)
            {
                proj.Project1 = project.Project;
                proj.StartDate = project.StartDate;
                proj.EndDate = project.EndDate;
                proj.Prioriy = project.Priority;
                if (extUser != null)
                {
                    extUser.ProjectID = null;
                }

                user.ProjectID = project.ProjectID;
                _projectManager.SaveChanges();
            }

        }
    }
}
