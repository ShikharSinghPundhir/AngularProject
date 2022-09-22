import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DisplayStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentRoutingModule
  ],
  exports:[
    DisplayStudentComponent
  ]
})
export class StudentModule { }
