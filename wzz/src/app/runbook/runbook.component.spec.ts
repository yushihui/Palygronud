import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunbookComponent} from './runbook.component';

describe('RunbookComponent', () => {
  let component: RunbookComponent;
  let fixture: ComponentFixture<RunbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunbookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
