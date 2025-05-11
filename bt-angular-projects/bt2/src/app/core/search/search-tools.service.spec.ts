import { TestBed } from '@angular/core/testing';

import { SearchToolsService } from './search-tools.service';

describe('SearchToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchToolsService = TestBed.get(SearchToolsService);
    expect(service).toBeTruthy();
  });
});
