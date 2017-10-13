import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RunbookRoutingModule} from './runbook-routing.module';
import {RunbookComponent} from './runbook.component';
import {RunbookCardComponent} from './runbook-card/runbook-card.component';
import {RunbookDetailComponent} from './runbook-detail/runbook-detail.component';
import {MatButtonModule, MatIconModule, MatRippleModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RunbookRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [
    RunbookComponent,
    RunbookDetailComponent,
    RunbookCardComponent
  ]
})
export class RunbookModule {
}
