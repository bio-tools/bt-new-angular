import { TestBed } from '@angular/core/testing';

import { ToolEditRightsService } from './tool-edit-rights.service';

describe('ToolEditRightsService', () => {
  let service: ToolEditRightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolEditRightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
