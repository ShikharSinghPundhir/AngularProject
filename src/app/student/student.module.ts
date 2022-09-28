import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

 



@NgModule({
  declarations: [
    DisplayStudentComponent,
    ViewStudentComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
  exports:[
    DisplayStudentComponent,
    ViewStudentComponent,
    EditStudentComponent
  ]
})
export class StudentModule { }
