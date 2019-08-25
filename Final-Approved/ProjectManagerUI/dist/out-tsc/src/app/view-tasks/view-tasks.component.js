import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../service/api-service';
import { ProjectListModelComponent } from '../model-popup/project-list-model/project-list-model.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
let ViewTasksComponent = class ViewTasksComponent {
    constructor(apiService, dialogService, router) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.router = router;
    }
    ngOnInit() {
    }
    EndTask(task) {
        this.apiService.EndTask(task).subscribe((data) => {
            this.GetTasks(this.ProjectID);
            document.getElementById('userMsg').innerText = "Task ended successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    }
    EditTask(task) {
        this.router.navigate(['/addTasks', { task: JSON.stringify(task) }], { skipLocationChange: true });
    }
    openProjectDialog() {
        let disposable = this.dialogService.addDialog(ProjectListModelComponent, this.projectList)
            .subscribe((selectedProject) => {
            if (selectedProject) {
                this.ProjectID = selectedProject.ProjectID;
                this.ProjectName = selectedProject.ProjectName;
                this.GetTasks(this.ProjectID);
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
    sortingTask(sort) {
        if (sort == 'SDate') {
            this.filteredList.sort((a, b) => {
                if (a.StartDate < b.StartDate)
                    return -1;
                else if (a.StartDate > b.StartDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'EDate') {
            this.filteredList.sort((a, b) => {
                if (a.EndDate < b.EndDate)
                    return -1;
                else if (a.EndDate > b.EndDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Priority') {
            this.filteredList.sort((a, b) => {
                if (a.Priority < b.Priority)
                    return -1;
                else if (a.Priority > b.Priority)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Completed') {
            this.filteredList.sort((a, b) => {
                if (a.Status > b.Status)
                    return -1;
                else if (a.Status < b.Status)
                    return 1;
                else
                    return 0;
            });
        }
    }
    GetTasks(projectID) {
        this.apiService.GetTasks(projectID)
            .subscribe((data) => {
            console.log(data);
            this.taskList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.taskList);
        this.taskListCount = this.filteredList.length;
    }
};
ViewTasksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-tasks',
        templateUrl: './view-tasks.component.html',
        styleUrls: ['./view-tasks.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService, DialogService, Router])
], ViewTasksComponent);
export { ViewTasksComponent };
//# sourceMappingURL=view-tasks.component.js.map