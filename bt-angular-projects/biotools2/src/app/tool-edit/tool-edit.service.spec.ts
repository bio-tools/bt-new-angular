import { TestBed } from '@angular/core/testing';

import { ToolEditService } from './tool-edit.service';

describe('ToolEditService', () => {
  let service: ToolEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
