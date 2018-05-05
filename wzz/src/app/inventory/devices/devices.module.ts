import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DevicesRoutingModule } from "./devices-routing.module";
import { DevicesComponent } from "./devices.component";
import { DeviceDetailComponent } from "./device-detail/device-detail.component";
import { HttpClientModule } from "@angular/common/http";
import {
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule
} from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		DevicesRoutingModule,
		HttpClientModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		MatProgressSpinnerModule
	],
	declarations: [DevicesComponent, DeviceDetailComponent]
})
export class DevicesModule {}
