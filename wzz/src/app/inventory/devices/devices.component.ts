import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiServer} from '../../core/api-server';

@Component({
  selector: 'wzz-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private http: HttpClient,
              private apiServer: ApiServer) {
  }

  ngOnInit() {
    this.http.get(this.apiServer.API_DEVICE).subscribe(dvs => {

    });
  }

}
