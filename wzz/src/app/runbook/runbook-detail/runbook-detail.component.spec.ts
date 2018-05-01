import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunbookDetailComponent} from './runbook-detail.component';

describe('RunbookDetailComponent', () => {
  let component: RunbookDetailComponent;
  let fixture: ComponentFixture<RunbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunbookDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
