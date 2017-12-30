import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule, MatButtonModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {WzzComponent} from './wzz.component';
import {WzzRoutingModule} from './wzz-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    WzzComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    CoreModule,
    WzzRoutingModule,
  ],
  providers: [],
  bootstrap: [WzzComponent]
})
export class WzzModule {
}
