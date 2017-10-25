import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

declare var YAML: any;

@Injectable()
export class RunbookService {

  private runbookDeleteAction = new Subject<string>();
  runbookDeleted$ = this.runbookDeleteAction.asObservable();

  constructor(private router: Router) {
  }

  gotoRunbookDetail(runbookId: string) {
    // this.router.navigate(['detail/' + runbookId], {relativeTo: this.route});
    this.router.navigate(['/runbooks/detail/' + runbookId]);
  }

  deleteRunbookFromList(id: string) {
    this.runbookDeleteAction.next(id);
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
