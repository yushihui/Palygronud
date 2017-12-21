import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DevicesRoutingModule} from './devices-routing.module';
import {DevicesComponent} from './devices.component';
import {DeviceDetailComponent} from './device-detail/device-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  declarations: [DevicesComponent, DeviceDetailComponent]
})
export class DevicesModule {
}
