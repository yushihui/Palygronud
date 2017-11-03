import {Component, Input, OnInit} from '@angular/core';
import {Runbook} from '../runbook.service';

@Component({
  selector: 'wzz-runbook-tree',
  templateUrl: './runbook-tree.component.html',
  styleUrls: ['./runbook-tree.component.css']
})
export class RunbookTreeComponent implements OnInit {

  @Input() runbook: Runbook;

  constructor() {
  }

  ngOnInit() {
  }

}
