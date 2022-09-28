import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const r :Routes =[
  {
    path:"",
    component:DisplayStudentComponent
  },
  {
    path: "view_student/:id",
    component:ViewStudentComponent
  },
  {
    path: "edit_student/:id",
    component:EditStudentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(r)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
