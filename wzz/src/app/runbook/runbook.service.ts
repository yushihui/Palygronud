import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RunbookService {

  constructor(private http: HttpClient) {
  }

}

export class Runbook {
  constructor(public id: string,
              public createdBy: string,
              public name: string,
              public tags: string[],
              public createdTime: Date,
              public nodes: RunbookNode[]) {
  }

}

export class RunbookNode {
  constructor(public name: string,
              public taskType: TaskType) {
  }

}


export enum TaskType {
  CLI,
  PING,
  TRACE,
  SNMP,
  PATH,
  QAPP,
  COMPARE,
  NETWORKCHANGE,
  ANSIBLE,
  NETCONF,
  DISCOVER,
  BUILDTOPO,
  RESTAPI
}
