import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
let MainModule = class MainModule {
};
MainModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ProjectComponent,
            HomeComponent
        ],
        imports: [
            CommonModule,
            MainRoutingModule,
            SharedModule
        ]
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=main.module.js.map