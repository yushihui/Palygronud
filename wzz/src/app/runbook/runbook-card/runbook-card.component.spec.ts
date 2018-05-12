import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunbookCardComponent} from './runbook-card.component';

describe('RunbookCardComponent', () => {
  let component: RunbookCardComponent;
  let fixture: ComponentFixture<RunbookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunbookCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
