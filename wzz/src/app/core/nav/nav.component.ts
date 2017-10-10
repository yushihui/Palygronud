import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  gotoDetail() {
    this.router.navigate(['../runbook'], {relativeTo: this.route});
  }
}
