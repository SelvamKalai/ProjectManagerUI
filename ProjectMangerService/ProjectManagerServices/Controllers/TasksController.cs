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
    [RoutePrefix("api/Tasks")]
    public class TasksController : ApiController
    {
        private readonly ITaskBL _taskBL = null;

        public TasksController()
        {
            _taskBL = new TaskBL();
        }

        public TasksController(ITaskBL taskBL)
        {
            _taskBL = taskBL;
        }

        [HttpPost]
        [Route("AddTask")]
        public IHttpActionResult AddTask([FromBody]ProjectMangerModel.Tasks task)
        {
            try
            {
                CommonEntities.Tasks tk = new CommonEntities.Tasks
                {
                    Task = task.Task,
                    ProjectID = task.ProjectID,
                    Priority = task.Priority,
                    ParentTaskID = task.ParentTaskID,
                    StartDate = task.StartDate,
                    EndDate = task.EndDate,
                    UserID = task.UserID
                };

                _taskBL.AddTasks(tk);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [Route("UpdateTask")]
        public IHttpActionResult UpdateTask([FromBody]ProjectMangerModel.Tasks task)
        {
            try
            {
                CommonEntities.Tasks tk = new CommonEntities.Tasks
                {
                    TaskID = task.TaskID,
                    Task = task.Task,
                    ProjectID = task.ProjectID,
                    Priority = task.Priority,
                    ParentTaskID = task.ParentTaskID,
                    StartDate = task.StartDate,
                    EndDate = task.EndDate,
                    UserID = task.UserID
                };

                _taskBL.UpdateTask(tk);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [Route("AddParentTask")]
        public IHttpActionResult AddParentTask([FromBody]ProjectMangerModel.ParentTasks task)
        {
            try
            {
                CommonEntities.ParentTasks tk = new CommonEntities.ParentTasks
                {
                    ParentTask = task.ParentTask
                };

                _taskBL.AddParentTask(tk);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpGet]
        [Route("GetParentTasks")]
        public IHttpActionResult GetParentTasks()
        {
            Collection<ProjectMangerModel.ParentTasks> parentTasks = new Collection<ProjectMangerModel.ParentTasks>();

            var blTasks = _taskBL.GetParentTasks();
            blTasks.ToList()
                .ForEach(t => parentTasks.Add(
                   new ProjectMangerModel.ParentTasks
                   {
                       ParentTaskID = t.ParentTaskID,
                       ParentTask = t.ParentTask
                   }));
            return Ok(parentTasks);
        }

        [HttpGet]
        [Route("GetTasks/{projectID}")]
        public IHttpActionResult GetTasks(int projectID)
        {
            Collection<ProjectMangerModel.Tasks> tasks = new Collection<ProjectMangerModel.Tasks>();

            var blTasks = _taskBL.GetTasks(projectID);
            blTasks.ToList()
                .ForEach(s => tasks.Add(
                   new ProjectMangerModel.Tasks
                   {
                       Task = s.Task,
                       ProjectID = s.ProjectID,
                       Project = s.Project,
                       ParentTask = s.ParentTask,
                       Priority = s.Priority,
                       StartDate = s.StartDate,
                       EndDate = s.EndDate,
                       TaskID = s.TaskID,
                       Status = s.Status,
                       UserID = s.UserID,
                       UserName = s.UserName
                   }));

            return Ok(tasks);
        }

        [HttpPost]
        [Route("EndTask")]
        public IHttpActionResult EndTask([FromBody]ProjectMangerModel.Tasks task)
        {
            try
            {
                CommonEntities.Tasks tk = new CommonEntities.Tasks
                {
                    TaskID = task.TaskID
                };
                _taskBL.EndTask(tk);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

    }
}
