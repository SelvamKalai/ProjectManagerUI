(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-tasks/add-tasks.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-tasks/add-tasks.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #addTaskForm=\"ngForm\">\n    <h6 id=\"userMsg\"></h6>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtProject\">ProjectName:</label>\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"ProjectName\" id=\"txtProject\" name=\"txtProject\"\n        required #txtProject=\"ngModel\">\n      <button id=\"projDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openProjectDialog()\">Search</button>\n      <div [hidden]=\"!projectError\" class=\"alertDanger\">\n        Project is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtTask\">Task:</label>\n      <input type=\"text\" style=\"width: 51%;\" class=\"form-control textClass\" [(ngModel)]=\"TaskName\" id=\"txtTask\" name=\"txtTask\"\n        required #txtTask=\"ngModel\">\n      <div [hidden]=\"!taskError\" class=\"alertDanger\">\n        Task is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"checkbox\" [disabled]=\"TaskID\" style=\"margin-right: 1%;margin-left: 15%; \" id=\"chkPTask\" name=\"chkPTask\"\n        (change)=\"TaskCheckBoxChange()\" [(ngModel)]=\"IsParentTask\"> Parent Task\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtPriority\">Priority:</label>\n      <input type=\"range\" [disabled]=\"IsParentTask\" class=\"slider\" id=\"txtPriority\" name=\"txtPriority\" [(ngModel)]=\"Priority\"\n        required min=\"0\" max=\"30\" step=\"1\" #txtPriority=\"ngModel\"> {{Priority}}\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtPTask\">Parent Task:</label>\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"ParentTaskName\" id=\"txtPTask\" name=\"txtPTask\"\n        required #txtPTask=\"ngModel\">\n      <button id=\"parentTaskDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openParentTaskDialog()\">Search</button>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"txtSDate\">Start Date:</label>\n      <input type=\"date\" [disabled]=\"IsParentTask\" id=\"txtSDate\" name=\"txtSDate\" style=\"margin-left: 1%; width: 23%;\"\n        [min]=\"startMinDate\" [(ngModel)]=\"StartDate\" required class=\"form-control\">\n      <label for=\"txtEDate\" style=\"margin-left: 3%;\">End Date:</label>\n      <input type=\"date\" [disabled]=\"IsParentTask\" id=\"txtEDate\" name=\"txtEDate\" style=\"margin-left: 1%; width: 23%;\"\n        [min]=\"endMinDate\" [(ngModel)]=\"EndDate\" required class=\"form-control\">\n      <div [hidden]=\"!startEndDateError\" class=\"alertDanger\">\n        Start and End Date is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtUser\">User:</label>\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"UserName\" disabled id=\"txtUser\" name=\"txtUser\"\n        required #txtUser=\"ngModel\">\n      <button id=\"openUserDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openUserDialog()\">Search</button>\n      <div [hidden]=\"!userError\" class=\"alertDanger\">\n        User is required\n      </div>\n    </div>\n    <div style=\"padding-left: 50%;\">\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"AddUpdateTask();\">{{addButtonText}}</button>\n      <button class=\"btn btn-default\" (click)=\"ResetTask();\" style=\"margin-left: 5px;\">Reset</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container BottomMargin\">\n  <h1>Project Manager</h1>\n  <br>\n  <ul id=\"grouplist\">\n    <li class=\"inlineClass\" [routerLink]=\"'/projects'\" [ngClass]=\"{'active': selectedItem == 'addProjects'}\" (click)=\"listClick('addProjects')\">\n      Add Project\n    </li>\n    <li class=\"inlineClass\" [routerLink]=\"'/addTasks'\" [ngClass]=\"{'active': selectedItem == 'addTasks'}\" (click)=\"listClick('addTasks')\">\n      Add Task\n    </li>\n    <li class=\"inlineClass\" [routerLink]=\"'/users'\" [ngClass]=\"{'active': selectedItem == 'addUsers'}\" (click)=\"listClick('addUsers')\">\n      Add User\n    </li>\n    <li class=\"inlineClass\" [routerLink]=\"'/viewTasks'\" [ngClass]=\"{'active': selectedItem == 'viewTasks'}\" (click)=\"listClick('viewTasks')\">\n      View Task\n    </li>\n  </ul>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/model-popup/project-list-model/project-list-model.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/model-popup/project-list-model/project-list-model.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n      <h4 class=\"modal-title\">ProjectName List:</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\n          placeholder=\"Search...\">\n      </div>\n      <div *ngFor=\"let project of filteredList\">\n        <hr style=\"border-top: dotted 1px;\" />\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{project.ProjectName}}>\n\n        <button class=\"btn btn-default\" (click)=\"SelectProject(project)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\n      </div>\n\n      <div *ngIf=\"projectListCount==0\">\n        <label>There are no Projects</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/model-popup/task-list-model/task-list-model.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/model-popup/task-list-model/task-list-model.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n      <h4 class=\"modal-title\">Parent Task List:</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\n          placeholder=\"Search...\">\n      </div>\n      <div *ngFor=\"let task of filteredList\">\n        <hr style=\"border-top: dotted 1px;\" />\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{task.ParentTaskName}}>\n\n        <button class=\"btn btn-default\" (click)=\"SelectTask(task)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\n      </div>\n\n      <div *ngIf=\"parentTaskListCount==0\">\n        <label>There are no Parent tasks</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/model-popup/user-list-model/user-list-model.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/model-popup/user-list-model/user-list-model.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n      <h4 class=\"modal-title\">Users List:</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\n          placeholder=\"Search...\">\n      </div>\n      <div *ngFor=\"let user of filteredList\">\n        <hr style=\"border-top: dotted 1px;\" />\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.FirstName}}>\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.LastName}}>\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.EmployeeID}}>\n\n        <button class=\"btn btn-default\" (click)=\"SelectUser(user)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\n      </div>\n\n      <div *ngIf=\"userListCount==0\">\n        <label>There are no users</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #addProjectForm=\"ngForm\">\n    <h6 id=\"userMsg\"></h6>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtProject\">ProjectName:</label>\n      <input type=\"text\" style=\"width: 53%;\" maxlength=\"100\" class=\"form-control textClass\" [(ngModel)]=\"ProjectName\" id=\"txtProject\"\n        name=\"txtProject\" required #txtProject=\"ngModel\">\n      <div [hidden]=\"!projectNameError\" class=\"alertDanger\">\n        Project is required\n      </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-left: 15%\">\n      <input type=\"checkbox\" style=\"margin-right: 1%;\" id=\"chkDate\" name=\"chkDate\" (change)=\"DateCheckBoxChange()\"\n        [(ngModel)]=\"StartEndDateSelected\" #chkDate=\"ngModel\">\n      Set Start and End Date\n      <input type=\"date\" [disabled]=\"!StartEndDateSelected\" id=\"txtSDate\" name=\"txtSDate\" style=\"margin-left: 1%; width: 20%;\"\n        [min]=\"startMinDate\" [(ngModel)]=\"StartDate\" required class=\"form-control\" #txtSDate=\"ngModel\">\n      <input type=\"date\" [disabled]=\"!StartEndDateSelected\" id=\"txtEDate\" name=\"txtEDate\" style=\"margin-left: 1%; width: 20%;\"\n        [min]=\"endMinDate\" [(ngModel)]=\"EndDate\" required class=\"form-control\" #txtEDate=\"ngModel\">\n      <div [hidden]=\"!StartEndDateError\" class=\"alertDanger\">\n        Start and End Date is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtPriority\">Priority:</label>\n      <input type=\"range\" class=\"slider\" id=\"txtPriority\" name=\"txtPriority\" [(ngModel)]=\"Priority\" required min=\"0\"\n        max=\"30\" step=\"1\" #txtPriority=\"ngModel\"> {{Priority}}\n    </div>\n    <div class=\"form-group\">\n      <label class=\"labelClass\" for=\"txtManager\">Manager:</label>\n      <input type=\"text\" [hidden]=\"ManagerID\" style=\"width: 42%;\" class=\"form-control textClass\" [(ngModel)]=\"ManagerName\"\n        disabled id=\"txtManager\" name=\"txtManager\" required #txtManager=\"ngModel\">\n      <button id=\"openModalButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openDialog()\">Search</button>\n      <div [hidden]=\"!managerError\" class=\"alertDanger\">\n        Manager is required\n      </div>\n    </div>\n    <div style=\"padding-left: 50%;\">\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"AddUpdateProject();\" style=\"width: 25%;\">{{AddButtonText}}</button>\n      <button class=\"btn btn-default\" (click)=\"ResetData();\" style=\"margin-left: 5px; width: 15%;\">{{ResetButtonText}}</button>\n    </div>\n  </form>\n  <hr style=\"border-top: 1px solid #333;\" />\n  <div>\n    <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\n      placeholder=\"Search...\">\n    <div style=\"margin-top: 2%;\">\n      <b style=\"display: inline; width: 10%;\">Sort:</b>\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('SDate')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Start\n        Date</button>\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('EDate')\" style=\"display: inline;margin-left: 2%; width: 15%;\">End\n        Date</button>\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('Priority')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Priority</button>\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('Completed')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Completed</button>\n    </div>\n  </div>\n\n  <div *ngFor=\"let proj of filteredList\">\n    <hr style=\"border-top: dotted 1px;\" />\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <div class=\"row\" style=\" padding-left: 15px;\">\n          <label style=\"display: inline;\">ProjectName: </label>\n          <input type=\"text\" style=\"display: inline; width: 80%;\" class=\"form-control\" disabled value={{proj.ProjectName}}>\n        </div>\n        <div class=\"row\" style=\" margin-top: 2%;\">\n          <div class=\"col-xs-6\">\n            <label style=\"display: inline;\">No of Tasks: </label>\n            <span style=\"display: inline; width: 60%;\">{{proj.NoofTasks}}</span>\n          </div>\n          <div class=\"col-xs-6\">\n            <label style=\"display: inline;\">Completed: </label>\n            <span style=\"display: inline; width: 60%;\">{{proj.NoofCompletedTasks}}</span>\n          </div>\n        </div>\n        <div class=\"row\" style=\" margin-top: 2%;\">\n          <div class=\"col-xs-6\">\n            <label style=\"display: inline;\">Start Date: </label>\n            <span style=\"display: inline; width: 60%;\">{{proj.StartDate | date: 'dd-MM-yyyy'}}</span>\n          </div>\n          <div class=\"col-xs-6\">\n            <label style=\"display: inline;\">End Date: </label>\n            <span style=\"display: inline; width: 60%;\">{{proj.EndDate | date: 'dd-MM-yyyy'}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-2\" style=\"margin-top: 7%;\">\n        <label style=\"display: inline;\">Priority: </label>\n        <span style=\"display: inline; width: 60%;\">{{proj.Priority}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <button class=\"btn btn-default\" style=\"width: 100%; height: 34px; margin-bottom: 10%;\" (click)=\"EditProject(proj)\">Update</button>\n        <button class=\"btn btn-default\" style=\"width: 100%; height: 34px;margin-bottom: 10%;\" (click)=\"SuspendProject(proj.ProjectID)\">Suspend</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"projListCount==0\">\n    <hr style=\"border-top: dotted 1px;\" />\n    <b>There are no projects</b>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #addUserForm=\"ngForm\">\n    <h6 id=\"userMsg\"></h6>\n    <div class=\"form-group\">\n      <label for=\"txtFName\">First Name:</label>\n      <input type=\"text\" maxlength=\"30\" class=\"form-control\" [(ngModel)]=\"FirstName\" id=\"txtFName\" name=\"txtFName\"\n        required #txtFName=\"ngModel\">\n      <div [hidden]=\"!firstNameError\" class=\"alertDanger\">\n        First Name is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"txtLName\">Last Name:</label>\n      <input type=\"text\" maxlength=\"30\" class=\"form-control\" [(ngModel)]=\"LastName\" id=\"txtLName\" name=\"txtLName\"\n        required #txtLName=\"ngModel\">\n      <div [hidden]=\"!lastNameError\" class=\"alertDanger\">\n        Last Name is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"txtEmpId\">Employee ID:</label>\n      <input type=\"text\" maxlength=\"6\" (keypress)=\"numberOnly($event)\" class=\"form-control\" [(ngModel)]=\"EmployeeID\" id=\"txtEmpId\"\n        name=\"txtEmpId\" required #txtEmpId=\"ngModel\">\n      <div [hidden]=\"!employeeIDError\" class=\"alertDanger\">\n        EmployeeID is required\n      </div>\n    </div>\n    <div style=\"padding-left: 30%;\">\n      <button type=\"submit\" class=\"btn btn-default\" style=\"width: 20%;\" (click)=\"AddUpdateUser();\">{{AddButtonText}}</button>\n      <button class=\"btn btn-default\" (click)=\"ResetData();\" style=\"margin-left: 5px; width: 15%;\">{{ResetButtonText}}</button>\n    </div>\n  </form>\n  <hr style=\"border-top: 1px solid #333;\" />\n  <div>\n    <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline; width: 43%;\"\n      placeholder=\"Search...\">\n    <b style=\"display: inline; margin-left: 2%; width: 10%;\">Sort:</b>\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('FName')\" style=\"display: inline;margin-left: 2%; width: 15%;\">First\n      Name</button>\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('LName')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Last\n      Name</button>\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('EId')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Employee\n      Id</button>\n  </div>\n\n  <div *ngFor=\"let user of filteredList\">\n    <hr style=\"border-top: dotted 1px;\" />\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.FirstName}}>\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.LastName}}>\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.EmployeeID}}>\n\n    <button class=\"btn btn-default\" (click)=\"EditUser(user)\" style=\"width: 10%; display: inline; margin-left: 1%;\">Edit</button>\n    <button class=\"btn btn-default\" (click)=\"DeleteUser(user)\" style=\"width: 10%; display: inline; margin-left: 1%;\">Delete</button>\n  </div>\n\n  <div *ngIf=\"userListCount==0\">\n    <label>There are no users</label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-tasks/view-tasks.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-tasks/view-tasks.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6 id=\"userMsg\"></h6>\n  <div>\n    <label style=\"display: inline;\">ProjectName: </label>\n    <input type=\"text\" placeholder=\"Please select the project...\" [(ngModel)]=\"ProjectName\" style=\"display: inline; width: 80%;\" class=\"form-control\" disabled>\n    <button id=\"openModalButton\" class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 10%;\" (click)=\"openProjectDialog()\">Search</button>\n  </div>\n  <div style=\"margin-top: 1%;\">\n    <label style=\"display: inline;\">Sort Tasks by: </label>\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('SDate')\">Start\n      Date</button>\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('EDate')\">End\n      Date</button>\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('Priority')\">Priority</button>\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('Completed')\">Completed</button>\n  </div>\n  <div *ngFor=\"let task of filteredList\">\n    <hr style=\"border-top: dotted 1px;\" />\n    <div class=\"row\">\n      <div class=\"col-xs-2\">\n        <label style=\"display: inline;\">Task</label>\n        <span style=\"display: inline;margin-left:25px;\">{{task.TaskName}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <label style=\"display: inline;\">Parent Task</label>\n        <span style=\"display: inline;margin-left:25px;\">{{task.ParentTaskName}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <label style=\"display: inline;\">Priority</label>\n        <span style=\"display: inline;margin-left:25px;\">{{task.Priority}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <label style=\"display: inline;\">Start Date</label>\n        <span style=\"display: inline;margin-left:25px;\">{{task.StartDate | date: 'dd-MM-yyyy'}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <label style=\"display: inline;\">End Date</label>\n        <span style=\"display: inline;margin-left:25px;\">{{task.EndDate | date: 'dd-MM-yyyy'}}</span>\n      </div>\n      <div class=\"col-xs-2\">\n        <button class=\"btn btn-default\" [disabled]=\"task.Status\" style=\"width: 100%; height: 34px; margin-bottom: 10%;\"\n          (click)=\"EditTask(task)\">Edit</button>\n        <button class=\"btn btn-default\" [disabled]=\"task.Status\" style=\"width: 100%; height: 34px;margin-bottom: 1%;\"\n          (click)=\"EndTask(task)\">End\n          Task</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"taskListCount==0\">\n    <hr style=\"border-top: dotted 1px;\" />\n    <b>There are no Tasks</b>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelClass {\n    width: 15%;\n  }\n  \n  .textClass {\n    width: 40%;\n  }\n  \n  .form-group {\n    display: flex;\n  }\n  \n  .BottomMargin {\n    margin-bottom: 1%;\n  }\n  \n  .alertDanger {\n    color: #a94442;\n    padding-left: 15px;\n  }\n  \n  .slider {\n    margin-top: 8px;\n    -webkit-appearance: none;\n    width: 51%;\n    height: 5px;\n    border-radius: 5px;\n    margin-right: 1%;\n    background: #ddd;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity .2s;\n  }\n  \n  .slider:hover {\n    opacity: 1;\n  }\n  \n  .slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: gray;\n    cursor: pointer;\n  }\n  \n  .slider::-moz-range-thumb {\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: gray;\n    cursor: pointer;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2tzL2FkZC10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUVaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXNrcy9hZGQtdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbENsYXNzIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIFxuICAudGV4dENsYXNzIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLkJvdHRvbU1hcmdpbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIH1cbiAgXG4gIC5hbGVydERhbmdlciB7XG4gICAgY29sb3I6ICNhOTQ0NDI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiA1MSU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbiAgfVxuICBcbiAgLnNsaWRlcjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.ts ***!
  \**************************************************/
/*! exports provided: AddTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksComponent", function() { return AddTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task-model */ "./src/app/models/task-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model-popup/task-list-model/task-list-model.component */ "./src/app/model-popup/task-list-model/task-list-model.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











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
            this.taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
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
                this.parentTaskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_2__["ParentTaskModel"]();
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
                this.taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
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
        let disposable = this.dialogService.addDialog(_model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_6__["ProjectListModelComponent"], this.projectList)
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
        let disposable = this.dialogService.addDialog(_model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_7__["TaskListModelComponent"], this.parentTaskList)
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
        let disposable = this.dialogService.addDialog(_model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_5__["UserListModelComponent"], this.UserList)
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
AddTasksComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
];
AddTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-tasks',
        template: __webpack_require__(/*! raw-loader!./add-tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-tasks/add-tasks.component.html"),
        styles: [__webpack_require__(/*! ./add-tasks.component.css */ "./src/app/add-tasks/add-tasks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
], AddTasksComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");




const appRoutes = [
    { path: '', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'addTasks', component: _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_0__["AddTasksComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'viewTasks', component: _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_3__["ViewTasksComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BottomMargin {\n    margin-bottom: 1%;\n}\n\n.inlineClass{\n    display: inline;\n    margin-left: -3%;\n    margin-right: 4%;\n    cursor: pointer;\n}\n\n.active{\n    color:goldenrod;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkJvdHRvbU1hcmdpbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5pbmxpbmVDbGFzc3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGl2ZXtcbiAgICBjb2xvcjpnb2xkZW5yb2Q7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProjectManagerUI';
        this.selectedItem = 'addUsers';
    }
    listClick(newValue) {
        this.selectedItem = newValue;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model-popup/task-list-model/task-list-model.component */ "./src/app/model-popup/task-list-model/task-list-model.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
            _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_9__["AddTasksComponent"],
            _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_10__["ViewTasksComponent"],
            _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_14__["UserListModelComponent"],
            _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_15__["ProjectListModelComponent"],
            _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_16__["TaskListModelComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        entryComponents: [
            _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_14__["UserListModelComponent"],
            _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_15__["ProjectListModelComponent"],
            _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_16__["TaskListModelComponent"]
        ],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["DialogService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/model-popup/project-list-model/project-list-model.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/model-popup/project-list-model/project-list-model.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXBvcHVwL3Byb2plY3QtbGlzdC1tb2RlbC9wcm9qZWN0LWxpc3QtbW9kZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model-popup/project-list-model/project-list-model.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/model-popup/project-list-model/project-list-model.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProjectListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListModelComponent", function() { return ProjectListModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/project-model */ "./src/app/models/project-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");





let ProjectListModelComponent = class ProjectListModelComponent extends ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"] {
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
        let projectModel = new _models_project_model__WEBPACK_IMPORTED_MODULE_3__["ProjectModel"]();
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
ProjectListModelComponent.ctorParameters = () => [
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
ProjectListModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list-model',
        template: __webpack_require__(/*! raw-loader!./project-list-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/model-popup/project-list-model/project-list-model.component.html"),
        styles: [__webpack_require__(/*! ./project-list-model.component.css */ "./src/app/model-popup/project-list-model/project-list-model.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], ProjectListModelComponent);



/***/ }),

/***/ "./src/app/model-popup/task-list-model/task-list-model.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/model-popup/task-list-model/task-list-model.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXBvcHVwL3Rhc2stbGlzdC1tb2RlbC90YXNrLWxpc3QtbW9kZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model-popup/task-list-model/task-list-model.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/model-popup/task-list-model/task-list-model.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaskListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListModelComponent", function() { return TaskListModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/task-model */ "./src/app/models/task-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");





let TaskListModelComponent = class TaskListModelComponent extends ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"] {
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
        let taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_3__["ParentTaskModel"]();
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
TaskListModelComponent.ctorParameters = () => [
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
TaskListModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list-model',
        template: __webpack_require__(/*! raw-loader!./task-list-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/model-popup/task-list-model/task-list-model.component.html"),
        styles: [__webpack_require__(/*! ./task-list-model.component.css */ "./src/app/model-popup/task-list-model/task-list-model.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], TaskListModelComponent);



/***/ }),

/***/ "./src/app/model-popup/user-list-model/user-list-model.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/model-popup/user-list-model/user-list-model.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXBvcHVwL3VzZXItbGlzdC1tb2RlbC91c2VyLWxpc3QtbW9kZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model-popup/user-list-model/user-list-model.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/model-popup/user-list-model/user-list-model.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListModelComponent", function() { return UserListModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/models/user-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");





let UserListModelComponent = class UserListModelComponent extends ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"] {
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
        let userModel = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
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
UserListModelComponent.ctorParameters = () => [
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
UserListModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list-model',
        template: __webpack_require__(/*! raw-loader!./user-list-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/model-popup/user-list-model/user-list-model.component.html"),
        styles: [__webpack_require__(/*! ./user-list-model.component.css */ "./src/app/model-popup/user-list-model/user-list-model.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], UserListModelComponent);



/***/ }),

/***/ "./src/app/models/project-model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/project-model.ts ***!
  \*****************************************/
/*! exports provided: ProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModel", function() { return ProjectModel; });
class ProjectModel {
}


/***/ }),

/***/ "./src/app/models/task-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/task-model.ts ***!
  \**************************************/
/*! exports provided: TaskModel, ParentTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskModel", function() { return ParentTaskModel; });
class TaskModel {
}
class ParentTaskModel {
}


/***/ }),

/***/ "./src/app/models/user-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user-model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
}


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelClass {\n  width: 15%;\n}\n\n.textClass {\n  width: 40%;\n}\n\n.form-group {\n  display: flex;\n}\n\n.BottomMargin {\n  margin-bottom: 1%;\n}\n\n.alertDanger {\n  color: #a94442;\n  padding-left: 15px;\n}\n\n.slider {\n  margin-top: 8px;\n  -webkit-appearance: none;\n  width: 53%;\n  height: 5px;\n  border-radius: 5px;\n  margin-right: 1%;\n  background: #ddd;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s;\n}\n\n.slider:hover {\n  opacity: 1;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: gray;\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: gray;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFFWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsQ2xhc3Mge1xuICB3aWR0aDogMTUlO1xufVxuXG4udGV4dENsYXNzIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uQm90dG9tTWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5hbGVydERhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zbGlkZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDUzJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3BhY2l0eTogMC43O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XG59XG5cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project-model */ "./src/app/models/project-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");






let ProjectsComponent = class ProjectsComponent {
    constructor(apiService, dialogService) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.projectNameError = false;
        this.StartEndDateError = false;
        this.managerError = false;
        this.StartEndDateSelected = false;
        this.Priority = 0;
        this.startMinDate = new Date().toISOString().split('T')[0];
        let tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.endMinDate = tmpDate.toISOString().split('T')[0];
    }
    ngOnInit() {
        this.AddButtonText = "Add ProjectName";
        this.ResetButtonText = "Reset";
        this.GetProjects();
    }
    GetProjects() {
        this.apiService.GetProjects()
            .subscribe((data) => {
            this.projectList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    AddUpdateProject() {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.ProjectID) {
            this.UpdateProject();
        }
        else {
            this.AddProject();
        }
    }
    AddProject() {
        var error = false;
        if (!this.ProjectName) {
            this.projectNameError = true;
            error = true;
        }
        else {
            this.projectNameError = false;
        }
        if (this.StartEndDateSelected && (!this.StartDate || !this.EndDate)) {
            this.StartEndDateError = true;
            error = true;
        }
        else {
            this.StartEndDateError = false;
        }
        if (!this.ManagerID) {
            this.managerError = true;
            error = true;
        }
        else {
            this.managerError = false;
        }
        if (!error) {
            this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
            this.object.ProjectName = this.ProjectName;
            this.object.Priority = this.Priority;
            if (this.StartEndDateSelected) {
                this.object.StartDate = new Date(this.StartDate);
                this.object.EndDate = new Date(this.EndDate);
            }
            this.object.ManagerID = this.ManagerID;
            this.apiService.AddProject(this.object)
                .subscribe((data) => {
                this.ResetData();
                this.GetProjects();
                document.getElementById('userMsg').innerText = "Project added successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    }
    UpdateProject() {
        var error = false;
        if (!this.ProjectName) {
            this.projectNameError = true;
            error = true;
        }
        else {
            this.projectNameError = false;
        }
        if (this.StartEndDateSelected && (!this.StartDate || !this.EndDate)) {
            this.StartEndDateError = true;
            error = true;
        }
        else {
            this.StartEndDateError = false;
        }
        if (!this.ManagerID) {
            this.managerError = true;
            error = true;
        }
        else {
            this.managerError = false;
        }
        if (!error) {
            this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
            this.object.ProjectName = this.ProjectName;
            this.object.Priority = this.Priority;
            this.object.ProjectID = this.ProjectID;
            if (this.StartEndDateSelected) {
                this.object.StartDate = new Date(this.StartDate);
                this.object.EndDate = new Date(this.EndDate);
            }
            this.object.ManagerID = this.ManagerID;
            this.apiService.UpdateProject(this.object)
                .subscribe((data) => {
                this.ResetData();
                this.GetProjects();
                document.getElementById('userMsg').innerText = "Project updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    }
    SuspendProject(projectID) {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        this.apiService.SuspendProject(projectID)
            .subscribe((data) => {
            this.ResetData();
            this.GetProjects();
            document.getElementById('userMsg').innerText = "Project suspended successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    }
    EditProject(project) {
        this.AddButtonText = "Update";
        this.ResetButtonText = "Cancel";
        this.ProjectID = project.ProjectID;
        this.ProjectName = project.ProjectName;
        this.Priority = project.Priority;
        if (project.StartDate) {
            this.StartDate = project.StartDate.split('T')[0];
            this.EndDate = project.EndDate.split('T')[0];
            this.StartEndDateSelected = true;
        }
        else {
            this.StartEndDateSelected = false;
            this.StartDate = undefined;
            this.EndDate = undefined;
        }
        this.ManagerID = project.ManagerID;
        this.ManagerName = project.ManagerName;
    }
    filterItem() {
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.projectList).filter(item => (item.ProjectName != undefined ? item.ProjectName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true));
    }
    sortingProject(sort) {
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
                if (a.NoofCompletedTasks < b.NoofCompletedTasks)
                    return -1;
                else if (a.NoofCompletedTasks > b.NoofCompletedTasks)
                    return 1;
                else
                    return 0;
            });
        }
    }
    openDialog() {
        let disposable = this.dialogService.addDialog(_model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_5__["UserListModelComponent"], this.UserList)
            .subscribe((selectedUser) => {
            if (selectedUser) {
                this.ManagerID = selectedUser.UserID;
                this.ManagerName = selectedUser.FirstName + ' ' + selectedUser.LastName;
            }
        });
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.projectList);
        this.projListCount = this.filteredList.length;
    }
    ResetData() {
        this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
        this.ProjectName = undefined;
        this.Priority = 0;
        this.StartEndDateSelected = false;
        this.StartDate = undefined;
        this.EndDate = undefined;
        this.ManagerID = undefined;
        this.ManagerName = undefined;
        this.projectNameError = false;
        this.StartEndDateError = false;
        this.managerError = false;
        this.AddButtonText = "Add ProjectName";
        this.ResetButtonText = "Reset";
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    }
    DateCheckBoxChange() {
        if (this.StartEndDateSelected) {
            this.StartDate = new Date().toISOString().split('T')[0];
            let tmpDate = new Date();
            tmpDate.setDate(tmpDate.getDate() + 1);
            this.EndDate = tmpDate.toISOString().split('T')[0];
            this.StartEndDateError = false;
        }
        else {
            this.StartDate = undefined;
            this.EndDate = undefined;
            this.StartEndDateError = false;
        }
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/service/api-service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api-service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");








let ApiService = class ApiService {
    constructor(_http) {
        this._http = _http;
        this.userServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin + "/api/Users";
        this.projectServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin + "/api/Projects";
        this.taskServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].origin + "/api/Tasks";
    }
    GetUsers() {
        let getUrl = this.userServiceUrl + '/GetUsers';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response.json(); }))
            .catch(this.handleError);
    }
    AddUser(user) {
        let body = JSON.stringify(user);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let addUrl = this.userServiceUrl + '/AddUser';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    }
    UpdateUser(user) {
        let body = JSON.stringify(user);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let updateUrl = this.userServiceUrl + '/UpdateUser';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    }
    DeleteUser(user) {
        let body = JSON.stringify(user);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let updateUrl = this.userServiceUrl + '/DeleteUser';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    }
    GetProjects() {
        let getUrl = this.projectServiceUrl + '/GetProjects';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response.json(); }))
            .catch(this.handleError);
    }
    AddProject(project) {
        let body = JSON.stringify(project);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let addUrl = this.projectServiceUrl + '/AddProject';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    }
    UpdateProject(project) {
        let body = JSON.stringify(project);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let updateUrl = this.projectServiceUrl + '/UpdateProject';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    }
    SuspendProject(projectID) {
        let body = JSON.stringify(projectID);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let deleteUrl = this.projectServiceUrl + '/SuspendProject';
        return this._http.post(deleteUrl, body, options)
            .catch(this.handleError);
    }
    AddTask(task) {
        let body = JSON.stringify(task);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let addUrl = this.taskServiceUrl + '/AddTask';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    }
    UpdateTask(task) {
        let body = JSON.stringify(task);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let updateUrl = this.taskServiceUrl + '/UpdateTask';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    }
    AddParentTask(task) {
        let body = JSON.stringify(task);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let addUrl = this.taskServiceUrl + '/AddParentTask';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    }
    GetParentTasks() {
        let getUrl = this.taskServiceUrl + '/GetParentTasks';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response.json(); }))
            .catch(this.handleError);
    }
    GetTasks(projectID) {
        let getUrl = this.taskServiceUrl + '/GetTasks/' + projectID;
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => { return response.json(); }))
            .catch(this.handleError);
    }
    EndTask(task) {
        let body = JSON.stringify(task);
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        let options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        let endUrl = this.taskServiceUrl + '/EndTask';
        return this._http.post(endUrl, body, options)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('ApiService:handleError', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], ApiService);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  width: 15%;\n}\n\ninput {\n  width: 40%;\n}\n\n.form-group {\n  display: flex;\n}\n\n.BottomMargin {\n  margin-bottom: 1%;\n}\n\n.alertDanger {\n  color: #a94442;\n  padding-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICB3aWR0aDogMTUlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLkJvdHRvbU1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4uYWxlcnREYW5nZXIge1xuICBjb2xvcjogI2E5NDQ0MjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-model */ "./src/app/models/user-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");




let UsersComponent = class UsersComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.firstNameError = false;
        this.lastNameError = false;
        this.employeeIDError = false;
    }
    ngOnInit() {
        this.AddButtonText = "Add User";
        this.ResetButtonText = "Reset";
        this.GetUsers();
    }
    sortingUser(sort) {
        if (sort == 'FName') {
            this.filteredList.sort((a, b) => {
                if (a.FirstName < b.FirstName)
                    return -1;
                else if (a.FirstName > b.FirstName)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'LName') {
            this.filteredList.sort((a, b) => {
                if (a.LastName < b.LastName)
                    return -1;
                else if (a.LastName > b.LastName)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'EId') {
            this.filteredList.sort((a, b) => {
                if (a.EmployeeID < b.EmployeeID)
                    return -1;
                else if (a.EmployeeID > b.EmployeeID)
                    return 1;
                else
                    return 0;
            });
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    assignCopy() {
        this.filteredList = Object.assign([], this.UserList);
        this.userListCount = this.filteredList.length;
    }
    filterItem() {
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.UserList).filter(item => (item.FirstName != undefined ? item.FirstName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true) ||
            (item.LastName != undefined ? item.LastName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true) ||
            (item.EmployeeID != undefined ? item.EmployeeID.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 : true));
    }
    GetUsers() {
        this.apiService.GetUsers()
            .subscribe((data) => {
            this.UserList = data;
            this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    }
    AddUpdateUser() {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.UserID) {
            this.UpdateUser();
        }
        else {
            this.AddUser();
        }
    }
    AddUser() {
        if (!this.FirstName) {
            this.firstNameError = true;
        }
        else {
            this.firstNameError = false;
        }
        if (!this.LastName) {
            this.lastNameError = true;
        }
        else {
            this.lastNameError = false;
        }
        if (!this.EmployeeID) {
            this.employeeIDError = true;
        }
        else {
            this.employeeIDError = false;
        }
        if (!this.firstNameError && !this.lastNameError && !this.employeeIDError) {
            this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
            this.object.FirstName = this.FirstName;
            this.object.LastName = this.LastName;
            this.object.EmployeeID = this.EmployeeID;
            this.apiService.AddUser(this.object)
                .subscribe((data) => {
                this.ResetData();
                this.GetUsers();
                document.getElementById('userMsg').innerText = "User added successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    }
    UpdateUser() {
        if (!this.FirstName) {
            this.firstNameError = true;
        }
        else {
            this.firstNameError = false;
        }
        if (!this.LastName) {
            this.lastNameError = true;
        }
        else {
            this.lastNameError = false;
        }
        if (!this.EmployeeID) {
            this.employeeIDError = true;
        }
        else {
            this.employeeIDError = false;
        }
        if (!this.firstNameError && !this.lastNameError && !this.employeeIDError) {
            this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
            this.object.UserID = this.UserID;
            this.object.FirstName = this.FirstName;
            this.object.LastName = this.LastName;
            this.object.EmployeeID = this.EmployeeID;
            this.apiService.UpdateUser(this.object)
                .subscribe((data) => {
                this.ResetData();
                this.GetUsers();
                document.getElementById('userMsg').innerText = "User updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    }
    DeleteUser(user) {
        let obj = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        obj.UserID = user.UserID;
        obj.FirstName = user.FirstName;
        obj.LastName = user.LastName;
        obj.EmployeeID = user.EmployeeID;
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        this.apiService.DeleteUser(obj)
            .subscribe((data) => {
            this.ResetData();
            this.GetUsers();
            document.getElementById('userMsg').innerText = "User deleted successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    }
    EditUser(user) {
        this.AddButtonText = "Update";
        this.ResetButtonText = "Cancel";
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.EmployeeID = user.EmployeeID;
        this.UserID = user.UserID;
    }
    ResetData() {
        this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        this.FirstName = undefined;
        this.LastName = undefined;
        this.EmployeeID = undefined;
        this.UserID = undefined;
        this.firstNameError = false;
        this.lastNameError = false;
        this.employeeIDError = false;
        this.AddButtonText = "Add User";
        this.ResetButtonText = "Reset";
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    }
};
UsersComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], UsersComponent);



/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdGFza3Mvdmlldy10YXNrcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.ts ***!
  \****************************************************/
/*! exports provided: ViewTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTasksComponent", function() { return ViewTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






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
        let disposable = this.dialogService.addDialog(_model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListModelComponent"], this.projectList)
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
ViewTasksComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ViewTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-tasks',
        template: __webpack_require__(/*! raw-loader!./view-tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-tasks/view-tasks.component.html"),
        styles: [__webpack_require__(/*! ./view-tasks.component.css */ "./src/app/view-tasks/view-tasks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ViewTasksComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //origin: 'http://localhost/ProjectManagerService'
    origin: 'http://localhost:51273'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\195473_ProjetManagerUI\ProjectManagerUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map