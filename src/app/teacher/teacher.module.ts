import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './insert/insert.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';



@NgModule({
  declarations: [
    InsertComponent,
    DisplayComponent,
    ViewTeacherComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewTeacherComponent,
    EditComponent,
    DisplayComponent,
    DeleteComponent,
    InsertComponent
    


  ]
})
export class TeacherModule { }
