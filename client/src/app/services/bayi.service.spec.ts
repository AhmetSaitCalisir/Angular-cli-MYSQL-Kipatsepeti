import { TestBed } from '@angular/core/testing';

import { BayiService } from './bayi.service';

describe('BayiService', () => {
  let service: BayiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
