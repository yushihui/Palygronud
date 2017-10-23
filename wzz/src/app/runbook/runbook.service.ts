import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var YAML: any;

@Injectable()
export class RunbookService {

  constructor(private http: HttpClient) {
  }

  getEmptyRunbook(): Runbook {

    return new Runbook();
  }

  getColumns(size: number): number {
    let cols = 4;
    if (size >= 1200) {
      cols = 4;
    } else if (size >= 960) {
      cols = 3;
    } else if (size >= 768) {
      cols = 2;
    } else {
      cols = 1;
    }
    return cols;
  }

  parseYaml2Runbook(yamlString: string, runbook: Runbook): void {
    try {
      const rbJson: any = YAML.parse(yamlString);
      runbook.name = rbJson.name;
      runbook.contentYaml = yamlString;
      runbook.tags = rbJson.tags;
    } catch (e) {
      throw e;
    }
  }

}

export class Runbook {
  public id: string;
  public createdTime: Date;
  public nodes: RunbookNode[];
  public shareType: RunbookShareType;
  public name: string;
  public createdBy: string;
  public contentYaml: string;
  public tags: string[];
  public description: string;

  constructor() {
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
