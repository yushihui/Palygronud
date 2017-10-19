import {Component, ElementRef, OnInit} from '@angular/core';
import {Runbook, RunbookService} from '../runbook.service';

declare var ace: any;

@Component({
  selector: 'wzz-runbook-detail',
  templateUrl: './runbook-detail.component.html',
  styleUrls: ['./runbook-detail.component.css']
})
export class RunbookDetailComponent implements OnInit {
  runbook: Runbook;
  editor: any;

  constructor(private runbookService: RunbookService, private element: ElementRef) {

  }

  ngOnInit() {
    this.runbook = this.runbookService.getEmptyRunbook();
    const editorEle = this.element.nativeElement.querySelector('.yml-editor');
    this.editor = ace.edit(editorEle);
    // this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/yaml');
  }

}
