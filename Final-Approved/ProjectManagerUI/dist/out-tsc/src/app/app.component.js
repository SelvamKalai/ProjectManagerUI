import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProjectManagerUI';
        this.selectedItem = 'addUsers';
    }
    listClick(newValue) {
        this.selectedItem = newValue;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map