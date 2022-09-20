import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ClassBindingComponent } from '../datab/class-binding/class-binding.component';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data:any
  constructor(private Api_service: ApiService) { }

  ngOnInit(): void {
    this.Api_service.alldata().subscribe((res)=>{
      // console.log(res)
      this.data=res
      console.log(this.data)
    })
    
   
    
  }
  

}
