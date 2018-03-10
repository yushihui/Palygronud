import {Injectable} from '@angular/core';
import {ScoreBoard} from '../shared/score-board/score-board.component';


@Injectable()
export class HomeService {

  constructor() {
  }


  getScoreBoards(): ScoreBoard[] {

    const result: Array<ScoreBoard> = [];
    // create devices board
    const dBoard: ScoreBoard = new ScoreBoard();
    dBoard.detail = '';
    dBoard.title = 'Devices';
    dBoard.summary = '';
    dBoard.score = '10 K';
    result.push(dBoard);

    // create  monitors board
    const mBoard: ScoreBoard = new ScoreBoard();
    mBoard.detail = '';
    mBoard.title = 'Monitors';
    mBoard.summary = '';
    mBoard.score = '500';
    result.push(mBoard);

    // create map board
    const mapBoard: ScoreBoard = new ScoreBoard();
    mapBoard.detail = '';
    mapBoard.title = 'Maps';
    mapBoard.summary = '';
    mapBoard.score = '50';
    result.push(mapBoard);

    // create runbook board
    const rBoard: ScoreBoard = new ScoreBoard();
    rBoard.detail = '';
    rBoard.title = 'Runbooks';
    rBoard.summary = '';
    rBoard.score = '300';
    result.push(rBoard);

    return result;
  }

}
