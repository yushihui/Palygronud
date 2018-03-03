import {Injectable} from '@angular/core';
import {ScoreBoard} from '../shared/score-board/score-board.component';


@Injectable()
export class HomeService {

  constructor() {
  }


  getScoreBoards(): ScoreBoard[] {

    const result: Array<ScoreBoard> = [];
    const dBoard: ScoreBoard = new ScoreBoard();
    dBoard.detail = '';
    dBoard.title = 'Devices';
    dBoard.summary = '';
    dBoard.score = '10000';
    result.push(dBoard);

    const mBoard: ScoreBoard = new ScoreBoard();
    mBoard.detail = '';
    mBoard.title = 'Monitors';
    mBoard.summary = '';
    mBoard.score = '500';
    result.push(mBoard);

    return result;
  }

}
