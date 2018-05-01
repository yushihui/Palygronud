import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RunbookComponent} from './runbook.component';
import {RunbookDetailComponent} from './runbook-detail/runbook-detail.component';

const runbookRoutes: Routes = [
  {
    path: '',
    component: RunbookComponent
  },
  {
    path: 'detail/:id',
    component: RunbookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(runbookRoutes)],
  exports: [RouterModule]
})
export class RunbookRoutingModule {
}
