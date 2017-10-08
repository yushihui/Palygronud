import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'wzz-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  menuItems = [
    'Inventory',
    'Runbook',
    'Map'
  ];

  constructor() {
  }

  ngOnInit() {


  }

}
