import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';



@NgModule({
  declarations: [
    AddEmpComponent,
    DisplayEmpComponent,
    EditEmpComponent,
    ViewEmpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
  AddEmpComponent,
  DisplayEmpComponent,
  EditEmpComponent,
  ]
})
export class EmployeeModule { }
