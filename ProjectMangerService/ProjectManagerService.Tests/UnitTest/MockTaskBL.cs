﻿using System;
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
    public class MockTaskBL : ITaskBL
    {
        public Collection<CommonEntities.Tasks> GetTasks(int projectID)
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            Collection<CommonEntities.Tasks> tasks = taskBL.GetTasks(projectID);

            return tasks;
        }

        public Collection<CommonEntities.ParentTasks> GetParentTasks()
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            Collection<CommonEntities.ParentTasks> tasks = taskBL.GetParentTasks();

            return tasks;
        }

        public void AddTasks(CommonEntities.Tasks task)
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            taskBL.AddTasks(task);
        }

        public void AddParentTask(CommonEntities.ParentTasks task)
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            taskBL.AddParentTask(task);
        }

        public void UpdateTask(CommonEntities.Tasks task)
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            taskBL.UpdateTask(task);
        }

        public void EndTask(CommonEntities.Tasks task)
        {
            ProjectManagerEntities mockContext = MockDataSetList();
            var taskBL = new TaskBL(mockContext);
            taskBL.EndTask(task);
        }

        private static ProjectManagerEntities MockDataSetList()
        {
            MockProjectManager mockProj = new MockProjectManager();
            ProjectManagerEntities mockContext = mockProj.MockDataSetList();

            return mockContext;
        }
    }
}
