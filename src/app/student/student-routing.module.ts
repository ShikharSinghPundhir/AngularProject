import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const r :Routes =[
  {
    path:"",
    component:DisplayStudentComponent
  },
  {
    path: "view_student/:id",
    component:ViewStudentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(r)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
