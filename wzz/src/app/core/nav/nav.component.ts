import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'wzz-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems = [
    'Inventory',
    'Runbook',
    'Map'
  ];

  ngOnInit() {
  }

  constructor() {
  }
}
