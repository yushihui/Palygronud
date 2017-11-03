import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RunbookRoutingModule} from './runbook-routing.module';
import {RunbookComponent} from './runbook.component';
import {RunbookCardComponent} from './runbook-card/runbook-card.component';
import {RunbookDetailComponent} from './runbook-detail/runbook-detail.component';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatStepperModule
} from '@angular/material';
import {RunbookService} from './runbook.service';
import {HttpClientModule} from '@angular/common/http';
import {ParserExceptionPipePipe} from './parser-exception-pipe.pipe';
import {RunbookTreeComponent} from './runbook-tree/runbook-tree.component';



@NgModule({
  imports: [
    CommonModule,
    RunbookRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  declarations: [
    RunbookComponent,
    RunbookDetailComponent,
    RunbookCardComponent,
    ParserExceptionPipePipe,
    RunbookTreeComponent
  ],
  providers: [RunbookService]
})
export class RunbookModule {
}
