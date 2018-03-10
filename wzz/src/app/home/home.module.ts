import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {SharedModule} from '../shared/shared.module';
import {MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {
}
