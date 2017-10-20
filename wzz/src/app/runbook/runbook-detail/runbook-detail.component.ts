import {Component, ElementRef, OnInit} from '@angular/core';
import {Runbook, RunbookService} from '../runbook.service';
import {YamlParserException} from 'app/runbook/yaml-parser-exception';
import {HttpClient} from '@angular/common/http';

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

  constructor(private runbookService: RunbookService, private element: ElementRef, private http: HttpClient) {

  }

  ngOnInit() {

    this.http.post('http://localhost:8080/inventory/runbooks/empty', null).subscribe(data => {
      this.runbook.contentYaml = data['contentYaml'];
      this.editor.getSession().setValue(this.runbook.contentYaml, 0);
    });
    const editorEle = this.element.nativeElement.querySelector('.yml-editor');
    this.editor = ace.edit(editorEle);
    // this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/yaml');
    this.editor.on('blur', () => this.parseYaml());
  }

  parseYaml(): void {
    const yamlString: string = this.editor.getValue();


  }


}
