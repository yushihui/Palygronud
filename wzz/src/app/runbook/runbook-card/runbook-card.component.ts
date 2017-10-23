import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Runbook, RunbookService} from '../runbook.service';
import {HttpClient} from '@angular/common/http';
import {ApiServer} from '../../core/api-server';

@Component({
  selector: 'wzz-runbook-card',
  templateUrl: './runbook-card.component.html',
  styleUrls: ['./runbook-card.component.css']
})
export class RunbookCardComponent implements OnInit {

  @Input() runbook: Runbook;


  constructor(private http: HttpClient, private apiServer: ApiServer, private runbookService: RunbookService) {
  }

  ngOnInit() {
  }

  gotoDetails(): void {

  }

  delete(id: string): void {
    this.http.delete(this.apiServer.API_RUNBOOK + '/' + id).subscribe(data => {
      this.runbookService.deleteRunbookFromList(id);
    });
  }

}
