import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScoreBoardComponent} from './score-board/score-board.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [ScoreBoardComponent],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [ScoreBoardComponent],
  providers: []
})
export class SharedModule {
}
