import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  pn='HOW TO BECOME RICH'
  hide=false
  constructor() { }

  ngOnInit(): void {
  }

}
