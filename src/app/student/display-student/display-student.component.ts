import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  data:any
  constructor(private student_service:StudentService) { }

  ngOnInit(): void {
    this.student_service.getdata().subscribe((res)=>{
      console.log(res)
      this.data=res
    })
  }

}
