import { TestBed } from '@angular/core/testing';

import { DomainManagerService } from './domain-manager.service';

describe('DomainManagerService', () => {
  let service: DomainManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
