import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatGridListModule,
  MatIconModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {
}
