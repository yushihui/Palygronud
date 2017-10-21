import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {WzzComponent} from './wzz.component';
import {WzzRoutingModule} from './wzz-routing.module';
// import { RunbookComponent } from './runbook/runbook.component';
// import { DevicesComponent } from './inventory/devices/devices.component';
// import { RunbookDetailComponent } from './runbook/runbook-detail.component';

@NgModule({
  declarations: [
    WzzComponent
    // RunbookComponent,
    // DevicesComponent,
    // RunbookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    CoreModule,
    WzzRoutingModule

  ],
  providers: [],
  bootstrap: [WzzComponent]
})
export class WzzModule {
}
