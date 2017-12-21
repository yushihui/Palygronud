import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem, NavService} from '../nav.service';

@Component({
  selector: 'wzz-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit() {
    // this.menuItems.push(new MenuItem('Runbook', 'runbooks'), new MenuItem('Inventory', 'inventory/devices'), new MenuItem('Map', 'map'));
    // this.menuItems = this.navService.getMenus();
    // this.initActiveMenu();
  }

  constructor(private route: ActivatedRoute, private router: Router, private navService: NavService) {
    this.menuItems = this.navService.getMenus();
    this.initActiveMenu();
  }

  initActiveMenu() {
    const url = this.router.url;
    if (url.startsWith('/inventory/')) {
      this.menuItems[1].active = true;
    } else if (url.startsWith('/runbook/')) {
      this.menuItems[0].active = true;
    } else if (url.startsWith('/map/')) {
      this.menuItems[2].active = true;
    }
  }

  gotoDetail(menu: MenuItem) {
    for (let i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].name === menu.name) {
        this.menuItems[i].active = true;
      } else {
        this.menuItems[i].active = false;
      }
    }
    this.router.navigate(['../' + menu.url], {relativeTo: this.route});
  }
}

// export class MenuItem {
//   constructor(public name: string, public url: string) {
//   }
// }
