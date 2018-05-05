import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiServer {
  API_PREFIX = 'http://192.168.33.122:8080';
  API_RUNBOOK = this.API_PREFIX + '/inventory/runbooks';
  API_DEVICE = this.API_PREFIX + '/inventory/devices';
  HttpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
}
