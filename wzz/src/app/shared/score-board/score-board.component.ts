import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wzz-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  @Input() title: string;
  @Input() score: string;
  @Input() summary: string;
  @Input() detail: string;

  constructor() {
  }

  ngOnInit() {
  }

}
