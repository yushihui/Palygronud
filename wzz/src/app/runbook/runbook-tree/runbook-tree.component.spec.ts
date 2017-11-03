import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunbookTreeComponent} from './runbook-tree.component';

describe('RunbookTreeComponent', () => {
  let component: RunbookTreeComponent;
  let fixture: ComponentFixture<RunbookTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunbookTreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
