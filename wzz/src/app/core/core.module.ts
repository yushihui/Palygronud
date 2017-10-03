import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';


@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: []
})
export class CoreModule {
}
