import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  students:any[]=[
    {id:1,name:'jay',age:25,email:'vikash@gmail.com'},
    {id:2,name:'radha',age:15,email:'rasra@gmail.com'},
    {id:3,name:'chautna',age:45,email:'basbkja@gmail.com'},
    {id:4,name:'ram',age:10000,email:'ram@gmail.com'},
    {id:5,name:'ravan',age:1000,email:'ravan@gmail.com'},
  ]
}
