import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {WzzComponent} from './wzz.component';
import {WzzRoutingModule} from './wzz-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [WzzComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    CoreModule,
    WzzRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [WzzComponent]
})
export class WzzModule {
}
