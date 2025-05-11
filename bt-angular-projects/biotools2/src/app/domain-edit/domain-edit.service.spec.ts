import { TestBed } from '@angular/core/testing';

import { DomainEditService } from './domain-edit.service';

describe('DomainEditService', () => {
  let service: DomainEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
