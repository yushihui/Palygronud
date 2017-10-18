import {Component, OnInit} from '@angular/core';
import {Runbook, RunbookService} from '../runbook.service';

@Component({
  selector: 'wzz-runbook-detail',
  templateUrl: './runbook-detail.component.html',
  styleUrls: ['./runbook-detail.component.css']
})
export class RunbookDetailComponent implements OnInit {


  runbook: Runbook;

  constructor(private runbookService: RunbookService) {
  }

  ngOnInit() {
    this.runbook = this.runbookService.getEmptyRunbook();
    this.runbook.contentYml = `
---
# An example Runbook
name: Martin D'vloper
job: Developer
skill: Elite
employed: True`;
  }

}
