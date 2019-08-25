import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { UserModel } from '../../models/user-model';
import { ApiService } from '../../service/api-service';
let UserListModelComponent = class UserListModelComponent extends DialogComponent {
    constructor(dialogService, apiService) {
        super(dialogService);
        this.apiService = apiService;
    }
    ngOnInit() {
        this.GetUsers();
        this.assignCopy();
    }
    GetUsers() {
        this.apiService.GetUsers()
            .subscribe((data) => {
            console.log(data);
            this.UserList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    SelectUser(user) {
        let userModel = new UserModel();
        userModel.FirstName = user.FirstName;
        userModel.LastName = user.LastName;
        userModel.EmployeeID = user.EmployeeID;
        userModel.UserID = user.UserID;
        this.result = userModel;
        this.close();
    }
    filterItem() {
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.UserList).filter(item => (item.FirstName != undefined ? item.FirstName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true) ||
            (item.LastName != undefined ? item.LastName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true) ||
            (item.EmployeeID != undefined ? item.EmployeeID.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true));
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.UserList);
        this.userListCount = this.filteredList.length;
    }
};
UserListModelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-list-model',
        templateUrl: './user-list-model.component.html',
        styleUrls: ['./user-list-model.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [DialogService, ApiService])
], UserListModelComponent);
export { UserListModelComponent };
//# sourceMappingURL=user-list-model.component.js.map