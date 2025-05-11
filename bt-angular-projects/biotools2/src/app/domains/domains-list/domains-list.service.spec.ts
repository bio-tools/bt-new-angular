import { TestBed } from '@angular/core/testing';

import { DomainsListService } from './domains-list.service';

describe('DomainsListService', () => {
  let service: DomainsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
