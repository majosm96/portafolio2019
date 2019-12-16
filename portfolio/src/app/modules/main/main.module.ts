import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
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
export class MainModule { }
