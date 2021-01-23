import { TestBed } from '@angular/core/testing';

import { SatisTalepService } from './satis-talep.service';

describe('SatisTalepService', () => {
  let service: SatisTalepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisTalepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
