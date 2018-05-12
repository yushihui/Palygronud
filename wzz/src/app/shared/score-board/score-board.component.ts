import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wzz-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  @Input() scoreBoard: ScoreBoard;

  constructor() {
  }

  ngOnInit() {
  }
}

export class ScoreBoard {
  public title: string;
  public score: string;
  public summary: string;
  public detail: string;

  constructor() {
  }
}
