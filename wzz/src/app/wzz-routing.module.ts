import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'runbooks',
    loadChildren: 'app/runbook/runbook.module#RunbookModule'
  },
  {
    path: 'inventory/devices',
    loadChildren: 'app/inventory/devices/devices.module#DevicesModule'
  },
  {
    path: 'maps',
    loadChildren: 'app/map/map.module#MapModule'
  },
  {
    path: 'monitors',
    loadChildren: 'app/monitor/monitor.module#MonitorModule'
  },
  {path: '**', component: PageNotFoundComponent}
  // {
  //   path: 'inventory/devices',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // }
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategy,
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class WzzRoutingModule {
}
