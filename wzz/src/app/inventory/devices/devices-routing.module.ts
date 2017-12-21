import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DevicesComponent} from './devices.component';
import {DeviceDetailComponent} from './device-detail/device-detail.component';

const deviceRoutes: Routes = [
  {
    path: '',
    component: DevicesComponent
  },
  {
    path: 'detail/:id',
    component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(deviceRoutes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {
}
