import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Runbook, RunbookService} from './runbook.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wzz-runbook',
  templateUrl: './runbook.component.html',
  styleUrls: ['./runbook.component.css']
})

export class RunbookComponent implements OnInit {

  public runbooks: Runbook[];
  cols = 4;
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private runbookService: RunbookService) {

    // console.log('window.innerHeight---' + window.innerWidth);
    this.cols = this.runbookService.getColumns(window.innerWidth);
  }

  gotoRunbookDetail(runbookId: string) {
    this.router.navigate(['detail/' + runbookId], {relativeTo: this.route});
  }

  ngOnInit() {
    // this.cols = this.runbookService.getColumns(window.innerHeight);
    this.http.get<Runbook[]>('http://localhost:8080/inventory/runbooks').subscribe(rbs => {
      this.loading = false;
      this.runbooks = rbs;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const size = event.currentTarget.innerWidth;
    this.cols = this.runbookService.getColumns(size);

  }


}
