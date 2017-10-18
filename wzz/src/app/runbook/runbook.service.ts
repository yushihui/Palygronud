import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RunbookService {

  constructor(private http: HttpClient) {
  }

  getEmptyRunbook(): Runbook {
    return new Runbook('admin', '', [], '', RunbookShareType.PUBLIC);
  }

}

export class Runbook {
  public id: string;
  public createdTime: Date;
  public nodes: RunbookNode[];

  constructor(public name: string,
              public contentYml: string,
              public tags: string[],
              public description: string,
              public shareType: RunbookShareType) {
  }

}

export class RunbookNode {
  constructor(public name: string,
              public provider: string) {
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

export enum RunbookShareType {
  PRIVATE,
  PUBLIC
}
