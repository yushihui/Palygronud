import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Runbook} from './runbook.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'wzz-runbook',
  templateUrl: './runbook.component.html',
  styleUrls: ['./runbook.component.css']
})

export class RunbookComponent implements OnInit {

  public runbooks: Runbook[];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  gotoRunbookDetail(runbookId: string) {
    this.router.navigate(['detail/' + runbookId], {relativeTo: this.route});
  }

  ngOnInit() {
    this.http.get<Runbook[]>('http://localhost:8080/inventory/runbooks').subscribe(rbs => {
      this.runbooks = rbs;
    });

  }


}
