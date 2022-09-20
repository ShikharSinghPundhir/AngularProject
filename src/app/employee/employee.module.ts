import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddEmpComponent,
    DisplayEmpComponent,
    EditEmpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
  AddEmpComponent,
  DisplayEmpComponent,
  EditEmpComponent,
  ]
})
export class EmployeeModule { }
