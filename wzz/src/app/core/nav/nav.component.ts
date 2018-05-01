import {Component, OnInit} from '@angular/core';
import {MenuItem, NavService} from '../nav.service';

@Component({
  selector: 'wzz-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
  }

  constructor(private navService: NavService) {
    this.menuItems = this.navService.getMenus();
  }
}
