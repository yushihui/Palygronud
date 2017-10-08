import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavComponent} from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    MatListModule,
    BrowserAnimationsModule
  ],
  exports: [NavComponent, SideNavComponent],
  declarations: [NavComponent, SideNavComponent],
  providers: []
})
export class CoreModule {
}
