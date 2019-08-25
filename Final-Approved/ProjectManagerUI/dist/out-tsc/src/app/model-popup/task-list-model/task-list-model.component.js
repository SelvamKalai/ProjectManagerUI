import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ParentTaskModel } from '../../models/task-model';
import { ApiService } from '../../service/api-service';
let TaskListModelComponent = class TaskListModelComponent extends DialogComponent {
    constructor(dialogService, apiService) {
        super(dialogService);
        this.apiService = apiService;
    }
    ngOnInit() {
        this.GetParentTasks();
        this.assignCopy();
    }
    GetParentTasks() {
        this.apiService.GetParentTasks()
            .subscribe((data) => {
            console.log(data);
            this.parentTaskList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    SelectTask(task) {
        let taskModel = new ParentTaskModel();
        taskModel.ParentTaskID = task.ParentTaskID;
        taskModel.ParentTaskName = task.ParentTaskName;
        this.result = taskModel;
        this.close();
    }
    filterItem() {
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.parentTaskList).filter(item => (item.ParentTaskName != undefined ? item.ParentTaskName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true));
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.parentTaskList);
        this.parentTaskListCount = this.filteredList.length;
    }
};
TaskListModelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-task-list-model',
        templateUrl: './task-list-model.component.html',
        styleUrls: ['./task-list-model.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [DialogService, ApiService])
], TaskListModelComponent);
export { TaskListModelComponent };
//# sourceMappingURL=task-list-model.component.js.map