import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ProjectModel } from '../../models/project-model';
import { ApiService } from '../../service/api-service';
let ProjectListModelComponent = class ProjectListModelComponent extends DialogComponent {
    constructor(dialogService, apiService) {
        super(dialogService);
        this.apiService = apiService;
    }
    ngOnInit() {
        this.GetProjects();
        this.assignCopy();
    }
    GetProjects() {
        this.apiService.GetProjects()
            .subscribe((data) => {
            console.log(data);
            this.projectList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    SelectProject(project) {
        let projectModel = new ProjectModel();
        projectModel.ProjectID = project.ProjectID;
        projectModel.ProjectName = project.ProjectName;
        this.result = projectModel;
        this.close();
    }
    filterItem() {
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.projectList).filter(item => (item.ProjectName != undefined ? item.ProjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true));
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.projectList);
        console.log(this.filteredList);
        this.projectListCount = this.filteredList.length;
    }
};
ProjectListModelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-project-list-model',
        templateUrl: './project-list-model.component.html',
        styleUrls: ['./project-list-model.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [DialogService, ApiService])
], ProjectListModelComponent);
export { ProjectListModelComponent };
//# sourceMappingURL=project-list-model.component.js.map