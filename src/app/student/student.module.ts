import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';

 



@NgModule({
  declarations: [
    DisplayStudentComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentRoutingModule
  ],
  exports:[
    DisplayStudentComponent,
    ViewStudentComponent
  ]
})
export class StudentModule { }
