import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  form: any
  constructor(private empaddservice : EmployeeService ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
      body:new FormControl('')
      
    })
  }
  add_comp_emp(){
    this.empaddservice.add_emp_insert(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
