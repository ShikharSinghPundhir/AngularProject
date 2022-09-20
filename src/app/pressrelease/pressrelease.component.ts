import { Component, OnInit } from '@angular/core';
import { ItmService } from '../itm.service';

@Component({
  selector: 'app-pressrelease',
  templateUrl: './pressrelease.component.html',
  styleUrls: ['./pressrelease.component.css']
})
export class PressreleaseComponent implements OnInit {
  data:any
  naam:any
  constructor(private a:ItmService) { }

  ngOnInit(): void {
    this.naam=this.a.mydata;
    this.data=this.a.students;
  }

}
