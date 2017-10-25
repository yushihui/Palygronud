import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Runbook, RunbookService} from './runbook.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiServer} from '../core/api-server';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wzz-runbook',
  templateUrl: './runbook.component.html',
  styleUrls: ['./runbook.component.css']
})

export class RunbookComponent implements OnInit, OnDestroy {


  public runbooks: Runbook[];
  cols = 4;
  loading = true;
  deteleSubscription: Subscription;

  constructor(private http: HttpClient, private runbookService: RunbookService,
              private apiServer: ApiServer) {
    this.cols = this.runbookService.getColumns(window.innerWidth);
  }

  gotoRunbookDetail(runbookId: string) {
    this.runbookService.gotoRunbookDetail(runbookId);
  }

  ngOnInit() {
    this.onRunbookDeleted();
    this.http.get<Runbook[]>(this.apiServer.API_RUNBOOK).subscribe(rbs => {
      this.loading = false;
      this.runbooks = rbs;
    });
  }

  onRunbookDeleted(): void {
    this.deteleSubscription = this.runbookService.runbookDeleted$.subscribe(
      runbookId => {
        const rbIndex = this.runbooks.findIndex(r => {
          return r.id === runbookId;
        });
        if (rbIndex > -1) {
          this.runbooks.splice(rbIndex, 1);
          console.log('real delete....');
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const size = event.currentTarget.innerWidth;
    this.cols = this.runbookService.getColumns(size);

  }

  ngOnDestroy(): void {
    this.deteleSubscription.unsubscribe();
  }


}
