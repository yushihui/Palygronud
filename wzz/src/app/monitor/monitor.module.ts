import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MonitorRoutingModule} from './monitor-routing.module';
import {MonitorsComponent} from './monitors.component';

@NgModule({
  imports: [CommonModule, MonitorRoutingModule],
  declarations: [MonitorsComponent]
})
export class MonitorModule {
}
