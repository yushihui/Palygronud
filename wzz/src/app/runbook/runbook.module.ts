import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RunbookRoutingModule} from './runbook-routing.module';
import {RunbookComponent} from './runbook.component';
import {RunbookDetailComponent} from './runbook-detail.component';
import {RunbookCardComponent} from './runbook-card/runbook-card.component';


@NgModule({
  imports: [
    CommonModule,
    RunbookRoutingModule
  ],
  declarations: [
    RunbookComponent,
    RunbookDetailComponent,
    RunbookCardComponent
  ]
})
export class RunbookModule {
}
