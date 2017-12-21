import {Component, Input, OnInit} from '@angular/core';
import {Runbook} from '../runbook.service';

@Component({
  selector: 'wzz-runbook-tree',
  templateUrl: './runbook-tree.component.html',
  styleUrls: ['./runbook-tree.component.css']
})
export class RunbookTreeComponent implements OnInit {

  @Input() runbook: Runbook;
  color: any;
  count: number;

  constructor() {
  }

  ngOnInit() {
    const availableColors = [
      {name: 'none', color: ''},
      {name: 'done', color: 'primary'},
      {name: 'error', color: 'accent'},
      {name: 'warning', color: 'accent'}
    ];
    this.color = availableColors[Math.floor(Math.random() * 4)];
  }

}
