import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:any
  constructor(private a:FirstfiddleService) { }

  ngOnInit(): void {
    this.name=this.a.name
    console.log(this.name)
  }

}
