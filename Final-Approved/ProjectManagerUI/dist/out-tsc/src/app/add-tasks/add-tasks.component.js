import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TaskModel } from '../models/task-model';
import { ParentTaskModel } from '../models/task-model';
import { ApiService } from '../service/api-service';
import { DialogService } from "ng2-bootstrap-modal";
import { UserListModelComponent } from '../model-popup/user-list-model/user-list-model.component';
import { ProjectListModelComponent } from '../model-popup/project-list-model/project-list-model.component';
import { TaskListModelComponent } from '../model-popup/task-list-model/task-list-model.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
let AddTasksComponent = class AddTasksComponent {
    constructor(apiService, dialogService, route, location) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.route = route;
        this.location = location;
        this.startMinDate = new Date().toISOString().split('T')[0];
        let tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.endMinDate = tmpDate.toISOString().split('T')[0];
        this.taskError = false;
        this.projectError = false;
        this.startEndDateError = false;
        this.userError = false;
        if (route.snapshot.params['task']) {
            let tModel = JSON.parse(route.snapshot.params['task']);
            this.TaskID = tModel.TaskID;
            this.TaskName = tModel.TaskName;
            this.ProjectID = tModel.ProjectID;
            this.ParentTaskID = tModel.ParentTaskID;
            this.ProjectName = tModel.ProjectName;
            this.Priority = tModel.Priority;
            this.StartDate = tModel.StartDate.split('T')[0];
            this.EndDate = tModel.EndDate.split('T')[0];
            this.UserID = tModel.UserID;
            this.ParentTaskName = tModel.ParentTaskName;
            this.UserName = tModel.UserName;
            this.addButtonText = "Update Task";
        }
        else {
            this.Priority = 0;
            this.StartDate = new Date().toISOString().split('T')[0];
            let tmpDate = new Date();
            tmpDate.setDate(tmpDate.getDate() + 1);
            this.EndDate = tmpDate.toISOString().split('T')[0];
            this.addButtonText = "Add Task";
        }
    }
    ngOnInit() {
    }
    TaskCheckBoxChange() {
        if (this.IsParentTask) {
            document.getElementById('projDialogButton').style.display = 'none';
            document.getElementById('parentTaskDialogButton').style.display = 'none';
            document.getElementById('openUserDialogButton').style.display = 'none';
            this.StartDate = undefined;
            this.EndDate = undefined;
            this.ProjectID = undefined;
            this.Priority = 0;
            this.ParentTaskID = undefined;
            this.UserID = undefined;
            this.projectError = false;
            this.startEndDateError = false;
            this.userError = false;
        }
        else {
            document.getElementById('projDialogButton').style.display = 'block';
            document.getElementById('parentTaskDialogButton').style.display = 'block';
            document.getElementById('openUserDialogButton').style.display = 'block';
            this.StartDate = new Date().toISOString().split('T')[0];
            let tmpDate = new Date();
            tmpDate.setDate(tmpDate.getDate() + 1);
            this.EndDate = tmpDate.toISOString().split('T')[0];
        }
    }
    AddUpdateTask() {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.TaskID) {
            this.UpdateTask();
        }
        else {
            this.AddTask();
        }
    }
    UpdateTask() {
        var error = false;
        if (!this.TaskName) {
            this.taskError = true;
            error = true;
        }
        else {
            this.taskError = false;
        }
        if (!this.ProjectID) {
            this.projectError = true;
            error = true;
        }
        else {
            this.projectError = false;
        }
        if (!this.UserID) {
            this.userError = true;
            error = true;
        }
        else {
            this.userError = false;
        }
        if (!this.StartDate || !this.EndDate) {
            this.startEndDateError = true;
            error = true;
        }
        else {
            this.startEndDateError = false;
        }
        if (!error) {
            this.taskModel = new TaskModel();
            this.taskModel.TaskID = this.TaskID;
            this.taskModel.TaskName = this.TaskName;
            this.taskModel.ProjectID = this.ProjectID;
            this.taskModel.ParentTaskID = this.ParentTaskID;
            this.taskModel.ProjectName = this.ProjectName;
            this.taskModel.Priority = this.Priority;
            this.taskModel.StartDate = new Date(this.StartDate);
            this.taskModel.EndDate = new Date(this.EndDate);
            this.taskModel.UserID = this.UserID;
            this.apiService.UpdateTask(this.taskModel)
                .subscribe((data) => {
                this.ResetTask();
                document.getElementById('userMsg').innerText = "Task updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    }
    AddTask() {
        if (this.IsParentTask) {
            this.projectError = false;
            this.startEndDateError = false;
            this.userError = false;
            if (!this.TaskName) {
                this.taskError = true;
            }
            else {
                this.taskError = false;
            }
            if (!this.taskError) {
                this.parentTaskModel = new ParentTaskModel();
                this.parentTaskModel.ParentTaskName = this.TaskName;
                this.apiService.AddParentTask(this.parentTaskModel)
                    .subscribe((data) => {
                    this.ResetTask();
                    document.getElementById('userMsg').innerText = "Task updated successfully...";
                    document.getElementById('userMsg').style.color = "green";
                }, function (error) {
                    console.log(error);
                    document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                    document.getElementById('userMsg').style.color = "red";
                });
            }
        }
        else {
            var error = false;
            if (!this.TaskName) {
                this.taskError = true;
                error = true;
            }
            else {
                this.taskError = false;
            }
            if (!this.ProjectID) {
                this.projectError = true;
                error = true;
            }
            else {
                this.projectError = false;
            }
            if (!this.UserID) {
                this.userError = true;
                error = true;
            }
            else {
                this.userError = false;
            }
            if (!this.StartDate || !this.EndDate) {
                this.startEndDateError = true;
                error = true;
            }
            else {
                this.startEndDateError = false;
            }
            if (!error) {
                this.taskModel = new TaskModel();
                this.taskModel.TaskName = this.TaskName;
                this.taskModel.ProjectID = this.ProjectID;
                this.taskModel.ParentTaskID = this.ParentTaskID;
                this.taskModel.ProjectName = this.ProjectName;
                this.taskModel.Priority = this.Priority;
                this.taskModel.StartDate = new Date(this.StartDate);
                this.taskModel.EndDate = new Date(this.EndDate);
                this.taskModel.UserID = this.UserID;
                this.apiService.AddTask(this.taskModel)
                    .subscribe((data) => {
                    document.getElementById('userMsg').innerText = "Task added successfully...";
                    document.getElementById('userMsg').style.color = "green";
                }, function (error) {
                    console.log(error);
                    document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                    document.getElementById('userMsg').style.color = "red";
                });
            }
        }
    }
    ResetTask() {
        this.Priority = 0;
        this.StartDate = new Date().toISOString().split('T')[0];
        let tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.EndDate = tmpDate.toISOString().split('T')[0];
        this.addButtonText = "Add Task";
        this.IsParentTask = false;
        this.TaskID = undefined;
        this.TaskName = undefined;
        this.ProjectID = undefined;
        this.ParentTaskID = undefined;
        this.ProjectName = undefined;
        this.UserID = undefined;
        this.ParentTaskName = undefined;
        this.UserName = undefined;
        this.taskError = false;
        this.projectError = false;
        this.startEndDateError = false;
        this.userError = false;
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    }
    openProjectDialog() {
        let disposable = this.dialogService.addDialog(ProjectListModelComponent, this.projectList)
            .subscribe((selectedProject) => {
            if (selectedProject) {
                this.ProjectID = selectedProject.ProjectID;
                this.ProjectName = selectedProject.ProjectName;
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
    openParentTaskDialog() {
        let disposable = this.dialogService.addDialog(TaskListModelComponent, this.parentTaskList)
            .subscribe((selectedTask) => {
            if (selectedTask) {
                this.ParentTaskID = selectedTask.ParentTaskID;
                this.ParentTaskName = selectedTask.ParentTaskName;
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
    openUserDialog() {
        let disposable = this.dialogService.addDialog(UserListModelComponent, this.UserList)
            .subscribe((selectedUser) => {
            if (selectedUser) {
                this.UserID = selectedUser.UserID;
                this.UserName = selectedUser.FirstName + ' ' + selectedUser.LastName;
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
};
AddTasksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-tasks',
        templateUrl: './add-tasks.component.html',
        styleUrls: ['./add-tasks.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService, DialogService, ActivatedRoute, Location])
], AddTasksComponent);
export { AddTasksComponent };
//# sourceMappingURL=add-tasks.component.js.map