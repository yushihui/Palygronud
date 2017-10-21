import {Component, Input, OnInit} from '@angular/core';
import {Runbook} from '../runbook.service';

@Component({
  selector: 'wzz-runbook-card',
  templateUrl: './runbook-card.component.html',
  styleUrls: ['./runbook-card.component.css']
})
export class RunbookCardComponent implements OnInit {

  @Input() runbook: Runbook;
  constructor() {
  }

  ngOnInit() {
  }


}
