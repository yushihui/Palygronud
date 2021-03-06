import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Runbook, RunbookService } from "./runbook.service";
import { HttpClient } from "@angular/common/http";
import { ApiServer } from "../core/api-server";

import {
	trigger,
	state,
	style,
	animate,
	transition
} from "@angular/animations";
import { Subscription } from "rxjs/index";

@Component({
	selector: "wzz-runbook",
	templateUrl: "./runbook.component.html",
	styleUrls: ["./runbook.component.css"],
	animations: [
		trigger("flyInOut", [
			state("in", style({ transform: "translateX(0)" })),
			transition("void => *", [
				style({ transform: "translateX(-100%)" }),
				animate(600)
			]),
			transition("* => void", [
				animate(100, style({ transform: "translateX(100%)" }))
			])
		])
	]
})
export class RunbookComponent implements OnInit, OnDestroy {
	public runbooks: Runbook[];
	cols = 4;
	loading = true;
	deteleSubscription: Subscription;

	constructor(
		private http: HttpClient,
		private runbookService: RunbookService,
		private apiServer: ApiServer
	) {
		this.cols = this.runbookService.getColumns(window.innerWidth);
	}

	gotoRunbookDetail(runbookId: string) {
		this.runbookService.gotoRunbookDetail(runbookId);
	}

	ngOnInit() {
		this.onRunbookDeleted();
		this.http.get<Runbook[]>(this.apiServer.API_RUNBOOK, this.apiServer.HttpOptions).subscribe(rbs => {
			this.loading = false;
			this.runbooks = rbs;
		});
	}

	onRunbookDeleted(): void {
		this.deteleSubscription = this.runbookService.runbookDeleted$.subscribe(
			runbookId => {
				const rbIndex = this.runbooks.findIndex(r => {
					return r.id === runbookId;
				});
				if (rbIndex > -1) {
					this.runbooks.splice(rbIndex, 1);
					console.log("real delete....");
				}
			}
		);
	}

	@HostListener("window:resize", ["$event"])
	onResize(event) {
		const size = event.currentTarget.innerWidth;
		this.cols = this.runbookService.getColumns(size);
	}

	ngOnDestroy(): void {
		this.deteleSubscription.unsubscribe();
	}
}
