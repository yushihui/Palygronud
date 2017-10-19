import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wzz-runbook',
  templateUrl: './runbook.component.html',
  styleUrls: ['./runbook.component.css']
})

export class RunbookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  gotoRunbookDetail(runbookId: string) {
    this.router.navigate(['detail/' + runbookId], {relativeTo: this.route});
  }

  ngOnInit() {

  }


}
