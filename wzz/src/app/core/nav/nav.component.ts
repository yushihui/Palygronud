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
    this.menuItems = this.navService.getMenus();
  }

  constructor(private route: ActivatedRoute, private router: Router, private navService: NavService) {

  }

  gotoDetail(menu: MenuItem) {
    this.router.navigate(['../' + menu.url], {relativeTo: this.route});
  }
}

// export class MenuItem {
//   constructor(public name: string, public url: string) {
//   }
// }
