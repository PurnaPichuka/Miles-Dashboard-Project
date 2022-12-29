import { TestBed } from '@angular/core/testing';

import { MilesServiceService } from './miles-service.service';

describe('MilesServiceService', () => {
  let service: MilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
