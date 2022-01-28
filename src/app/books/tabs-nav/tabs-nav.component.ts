import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss']
})
export class TabsNavComponent implements OnInit {
  activeIndex: number;
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
