import {Component, ElementRef, OnInit} from '@angular/core';
import {Runbook, RunbookService} from '../runbook.service';
import {YamlParserException} from 'app/runbook/yaml-parser-exception';
import {HttpClient} from '@angular/common/http';
import {ApiServer} from 'app/core/api-server';
import {ActivatedRoute} from '@angular/router';

declare var ace: any;


@Component({
  selector: 'wzz-runbook-detail',
  templateUrl: './runbook-detail.component.html',
  styleUrls: ['./runbook-detail.component.css']
})
export class RunbookDetailComponent implements OnInit {
  runbook: Runbook = new Runbook();
  editor: any;
  title: string;
  parseError: YamlParserException;

  constructor(private runbookService: RunbookService, private route: ActivatedRoute,
              private element: ElementRef, private http: HttpClient, private apiServer: ApiServer) {

  }

  ngOnInit() {
    const runbookId = this.route.snapshot.paramMap.get('id');
    if (runbookId === '0') {
      this.createEmptyRunbook();
    }
    const editorEle = this.element.nativeElement.querySelector('.yml-editor');
    this.editor = ace.edit(editorEle);
    // this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/yaml');
    this.editor.on('blur', () => this.parseYaml());
  }

  createEmptyRunbook(): void {
    this.http.post<Runbook>(this.apiServer.API_RUNBOOK + '/empty', null).subscribe(data => {
      this.runbook = data;
      this.editor.getSession().setValue(this.runbook.contentYaml, 0);
    });
  }

  parseYaml(): void {
    const yamlString: string = this.editor.getValue();


  }


}
