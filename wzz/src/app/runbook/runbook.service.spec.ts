import {TestBed, inject} from '@angular/core/testing';

import {RunbookService} from './runbook.service';

describe('RunbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunbookService]
    });
  });

  it(
    'should be created',
    inject([RunbookService], (service: RunbookService) => {
      expect(service).toBeTruthy();
    })
  );
});
