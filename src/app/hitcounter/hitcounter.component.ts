import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hitcounter',
  templateUrl: './hitcounter.component.html',
  styleUrls: ['./hitcounter.component.css']
})
export class HitcounterComponent implements OnInit {
  
  counter = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
