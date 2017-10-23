import {Injectable} from '@angular/core';

@Injectable()
export class ApiServer {
  const
  API_PREFIX = 'http://localhost:8080';
  API_RUNBOOK = this.API_PREFIX + '/inventory/runbooks';
  API_DEVICE = this.API_PREFIX + '/inventory/devices';
}
