import { TestBed } from '@angular/core/testing';

import { NewDomainService } from './new-domain.service';

describe('NewDomainService', () => {
  let service: NewDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
