import { TestBed } from '@angular/core/testing';

import { RollingDataService } from './rolling-data.service';

describe('RollingDataService', () => {
  let service: RollingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
