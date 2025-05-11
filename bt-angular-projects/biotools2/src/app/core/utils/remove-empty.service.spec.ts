import { TestBed } from '@angular/core/testing';

import { RemoveEmptyService } from './remove-empty.service';

describe('RemoveEmptyService', () => {
  let service: RemoveEmptyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveEmptyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
