import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiServer } from "../../core/api-server";
import { Device } from "./devices.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
	selector: "wzz-devices",
	templateUrl: "./devices.component.html",
	styleUrls: ["./devices.component.css"]
})
export class DevicesComponent implements OnInit {
	public deviceDataSource: MatTableDataSource<Device>;
	displayedColumns = ["name", "mgmtIP", "mainTypeName"];
	loading = true;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private http: HttpClient, private apiServer: ApiServer) {}

	ngOnInit() {
		this.http.get<Device[]>(this.apiServer.API_DEVICE).subscribe(dvs => {
			this.loading = false;
			this.deviceDataSource = new MatTableDataSource<Device>(dvs);
			this.deviceDataSource.paginator = this.paginator;
			this.deviceDataSource.sort = this.sort;
		});
	}
}
