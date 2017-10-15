import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RunbookRoutingModule} from './runbook-routing.module';
import {RunbookComponent} from './runbook.component';
import {RunbookCardComponent} from './runbook-card/runbook-card.component';
import {RunbookDetailComponent} from './runbook-detail/runbook-detail.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatRippleModule, MatSlideToggleModule} from '@angular/material';
import {RunbookService} from './runbook.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    RunbookRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  declarations: [
    RunbookComponent,
    RunbookDetailComponent,
    RunbookCardComponent
  ],
  providers: [RunbookService]
})
export class RunbookModule {
}
