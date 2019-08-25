﻿using NBench;
using ProjectManagerServices.Controllers;


namespace ProjectManagerService.Tests.LoadTest
{
    public class MemoryTest: PerformanceTestStuite<MemoryTest>
    {
        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement, NumberOfIterations = 500, RunTimeMilliseconds = 1000000)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetUsersMemory_Test()
        {
            var userController = new UsersController();
            var response = userController.GetUsers();
        }

        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement, NumberOfIterations = 500, RunTimeMilliseconds = 1000000)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetProjectMemory_Test()
        {
            var projController = new ProjectsController();
            var response = projController.GetProjects();
        }

        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement, NumberOfIterations = 500, RunTimeMilliseconds = 1000000)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetTasksMemory_Test()
        {
            var taskController = new TasksController();
            var response = taskController.GetTasks(1);
        }

        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement, NumberOfIterations = 500, RunTimeMilliseconds = 1000000)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetParentTasksMemory_Test()
        {
            var taskController = new TasksController();
            var response = taskController.GetParentTasks();
        }
    }
}
