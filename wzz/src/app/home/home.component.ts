import {Component, OnInit} from '@angular/core';
import {ScoreBoard} from '../shared/score-board/score-board.component';
import {HomeService} from './home.service';

@Component({
  selector: 'wzz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public scoreBoards: ScoreBoard[];

  constructor(private homeService: HomeService) {
    this.scoreBoards = this.homeService.getScoreBoards();
  }

  ngOnInit() {
  }

}
