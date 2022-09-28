import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  id :any
  student_view:any
  constructor(private student_service:StudentService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    //console.log(this.id)
    this.student_service.view_student(this.id).subscribe((res)=>{
      this.student_view=res;
      console.log(this.student_view)
    })
  }

}
