import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavComponent} from './side-nav/side-nav.component';
import {NavService} from './nav.service';
import {ApiServer} from 'app/core/api-server';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    MatListModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [NavComponent, SideNavComponent],
  declarations: [NavComponent, SideNavComponent],
  providers: [NavService, ApiServer]
})
export class CoreModule {
}
