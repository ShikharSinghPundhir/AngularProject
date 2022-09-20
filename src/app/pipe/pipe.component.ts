import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  myname:string='RAJPAL SINGH YO YO'
  mydate=new Date(2001,2,26);

  mynumber:number=67.44;
  mycurrency:number=6744;

    mydata:any[]=[
    {id:1,name:'vikas',city:'gwalior'},
    {id:2,name:'radha',city:'agra'},
    {id:3,name:'chautna',city:'mathura'},
    {id:4,name:'ram',city:'aligarh'},
    {id:5,name:'ravan',city:'hathras'},
    ]

  ngOnInit(): void {
  }

}
