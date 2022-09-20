import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  @Input () a: any;
  students:any[]=[
    {id:1,name:'vikas',age:25,email:'vikash@gmail.com'},
    {id:2,name:'radha',age:15,email:'rasra@gmail.com'},
    {id:3,name:'chautna',age:45,email:'basbkja@gmail.com'},
    {id:4,name:'ram',age:10000,email:'ram@gmail.com'},
    {id:5,name:'ravan',age:1000,email:'ravan@gmail.com'},
  ]

}
