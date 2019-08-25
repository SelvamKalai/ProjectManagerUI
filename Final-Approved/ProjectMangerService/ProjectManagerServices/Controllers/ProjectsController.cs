using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Collections.ObjectModel;
using System.Web.Http;
using ProjectManager.InterfaceLayer;
using ProjectManager.BusinessLayer;
using CommonEntities = ProjectManager.CommonLibrary;
using ProjectMangerModel = ProjectManagerServices.Models;

namespace ProjectManagerServices.Controllers
{
    [RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        private readonly IProjectBL _projectBL = null;

        public ProjectsController()
        {
            _projectBL = new ProjectBL();
        }

        public ProjectsController(IProjectBL projectBL)
        {
            _projectBL = projectBL;
        }

        [HttpGet]
        [Route("GetProjects")]
        public IHttpActionResult GetProjects()
        {
            Collection<ProjectMangerModel.Projects> projects = new Collection<ProjectMangerModel.Projects>();

            var blProjects = _projectBL.GetProjects();
            blProjects.ToList()
                .ForEach(project => projects.Add(
                   new ProjectMangerModel.Projects
                   {
                       ProjectID = project.ProjectID,
                       Project = project.Project,
                       StartDate = project.StartDate,
                       EndDate = project.EndDate,
                       Priority = project.Priority,
                       ManagerID = project.ManagerID,
                       ManagerName = project.ManagerName,
                       NoOfTasks = project.NoOfTasks,
                       NoOfCompletedTasks = project.NoOfCompletedTasks
                   }));

            return Ok(projects);
        }

        [HttpPost]
        [Route("AddProject")]
        public IHttpActionResult AddProject([FromBody]ProjectMangerModel.Projects project)
        {
            try
            {
                CommonEntities.Projects proj = new CommonEntities.Projects
                {
                    Project = project.Project,
                    StartDate = project.StartDate,
                    EndDate = project.EndDate,
                    Priority = project.Priority,
                    ManagerID = project.ManagerID
                };

                _projectBL.AddProject(proj);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [Route("UpdateProject")]
        public IHttpActionResult UpdateProject([FromBody]ProjectMangerModel.Projects project)
        {
            try
            {
                CommonEntities.Projects proj = new CommonEntities.Projects
                {
                    ProjectID = project.ProjectID,
                    Project = project.Project,
                    StartDate = project.StartDate,
                    EndDate = project.EndDate,
                    Priority = project.Priority,
                    ManagerID = project.ManagerID
                };

                _projectBL.UpdateProject(proj);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [Route("SuspendProject")]
        public IHttpActionResult SuspendProject([FromBody]int projectID)
        {
            try
            {
                _projectBL.SuspendProject(projectID);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
        }

    }   

}
