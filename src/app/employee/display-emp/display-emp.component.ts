import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.css']
})
export class DisplayEmpComponent implements OnInit {
  form: any;
  

  constructor(private emp_service:EmployeeService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
      body:new FormControl('')
    })
  }
  display_add_emp(){
    // console.log(this.form.value)
    this.emp_service.emp_insert(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }
  
  

}
