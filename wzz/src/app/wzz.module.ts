import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CoreModule} from './core/core.module';

import {WzzComponent} from './wzz.component';

@NgModule({
  declarations: [
    WzzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [WzzComponent]
})
export class WzzModule {
}
