import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RunbookRoutingModule} from './runbook-routing.module';
import {RunbookComponent} from './runbook.component';
import {RunbookDetailComponent} from './runbook-detail.component';


@NgModule({
  imports: [
    CommonModule,
    RunbookRoutingModule
  ],
  declarations: [
    RunbookComponent,
    RunbookDetailComponent
  ]
})
export class RunbookModule {
}
