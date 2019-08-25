using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.BusinessLayer;
using CommonEntities = ProjectManager.CommonLibrary;
using CommonDAL = ProjectManager.DataAccessLayer;
using ProjectManager.DataAccessLayer;
using ProjectManager.InterfaceLayer;
using System.Collections.ObjectModel;
using System.Data.Entity;
using NSubstitute;

namespace ProjectManagerService.Tests.UnitTest
{
    public class MockProjectManager
    {
        public ProjectManagerEntities MockDataSetList()
        {
            var dataProjects = new List<Project>()
            {
                new Project
                {
                    ProjectID=1,
                    Project1="CTS",
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(1)
                },
                new Project
                {
                    ProjectID=2,
                    Project1="TCS",
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(1)
                },
                new Project
                {
                    ProjectID=3,
                    Project1="Infosys",
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(1)
                }
        }.AsQueryable();

            DbSet<Project> mocksetProjects = Substitute.For<DbSet<Project>, IQueryable<Project>>();
            ((IQueryable<Project>)mocksetProjects).Provider.Returns(dataProjects.Provider);
            ((IQueryable<Project>)mocksetProjects).Expression.Returns(dataProjects.Expression);
            ((IQueryable<Project>)mocksetProjects).ElementType.Returns(dataProjects.ElementType);
            ((IQueryable<Project>)mocksetProjects).GetEnumerator().Returns(dataProjects.GetEnumerator());

            var dataUsers = new List<User>()
            {
                new User
                {
                    UserID=1,
                    ProjectID=1,
                    FirstName="Sundar",
                    LastName="Pichai",
                    EmployeeID="10001"
                },
                new User
                {
                    UserID=2,
                    ProjectID=1,
                    FirstName="Sathya",
                    LastName="Nadella",
                    EmployeeID="20001"
                },
                new User
                {
                    UserID=3,
                    ProjectID=2,
                    FirstName="Aparna",
                    LastName="Selvam",
                    EmployeeID="30001"
                }
        }.AsQueryable();

            DbSet<User> mocksetUsers = Substitute.For<DbSet<User>, IQueryable<User>>();
            ((IQueryable<User>)mocksetUsers).Provider.Returns(dataUsers.Provider);
            ((IQueryable<User>)mocksetUsers).Expression.Returns(dataUsers.Expression);
            ((IQueryable<User>)mocksetUsers).ElementType.Returns(dataUsers.ElementType);
            ((IQueryable<User>)mocksetUsers).GetEnumerator().Returns(dataUsers.GetEnumerator());

            var dataTasks = new List<ProjectManager.DataAccessLayer.Task>()
            {
                new ProjectManager.DataAccessLayer.Task
                {
                    TaskID=1,
                    Task1="Digi Learning",
                    ProjectID=1,
                    Prioriy=10,
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(1)
                },
                new ProjectManager.DataAccessLayer.Task
                {
                    TaskID=2,
                    Task1="Artificial Intelegence Part1",
                    ProjectID=1,
                    Prioriy=20,
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(5),
                    Status=true
                },
                new ProjectManager.DataAccessLayer.Task
                {
                   TaskID=3,
                    Task1="Machine Learning",
                    ProjectID=2,
                    Prioriy=10,
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(2)
                },
                new ProjectManager.DataAccessLayer.Task
                {
                   TaskID=4,
                    Task1="Internet Of Things",
                    ProjectID=2,
                    Prioriy=20,
                    StartDate=DateTime.Now.Date,
                    EndDate=DateTime.Now.Date.AddDays(4),
                    Status=true
                }
        }.AsQueryable();


            DbSet<ProjectManager.DataAccessLayer.Task> mocksetTasks = Substitute.For<DbSet<ProjectManager.DataAccessLayer.Task>, IQueryable<ProjectManager.DataAccessLayer.Task>>();

            ((IQueryable<ProjectManager.DataAccessLayer.Task>)mocksetTasks).Provider.Returns(dataTasks.Provider);
            ((IQueryable<ProjectManager.DataAccessLayer.Task>)mocksetTasks).Expression.Returns(dataTasks.Expression);
            ((IQueryable<ProjectManager.DataAccessLayer.Task>)mocksetTasks).ElementType.Returns(dataTasks.ElementType);
            ((IQueryable<ProjectManager.DataAccessLayer.Task>)mocksetTasks).GetEnumerator().Returns(dataTasks.GetEnumerator());

            var dataPTasks = new List<ParentTask>()
            {
                new ParentTask
                {
                    ParentTaskID=1,
                    ParentTask1="Apple"
                },
                new ParentTask
                {
                    ParentTaskID=2,
                    ParentTask1="Google"
                }
        }.AsQueryable();

            DbSet<ParentTask> mocksetPTasks = Substitute.For<DbSet<ParentTask>, IQueryable<ParentTask>>();
            ((IQueryable<ParentTask>)mocksetPTasks).Provider.Returns(dataPTasks.Provider);
            ((IQueryable<ParentTask>)mocksetPTasks).Expression.Returns(dataPTasks.Expression);
            ((IQueryable<ParentTask>)mocksetPTasks).ElementType.Returns(dataPTasks.ElementType);
            ((IQueryable<ParentTask>)mocksetPTasks).GetEnumerator().Returns(dataPTasks.GetEnumerator());

            ProjectManagerEntities mockContext = Substitute.For<ProjectManagerEntities>();
            mockContext.Projects.Returns(mocksetProjects);
            mockContext.Users.Returns(mocksetUsers);
            mockContext.Tasks.Returns(mocksetTasks);
            mockContext.ParentTasks.Returns(mocksetPTasks);

            return mockContext;
        }
    }
}
