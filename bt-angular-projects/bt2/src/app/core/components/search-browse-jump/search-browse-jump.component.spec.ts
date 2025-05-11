import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchBrowseJumpComponent } from './search-browse-jump.component';

describe('SearchBrowseJumpComponent', () => {
  let component: SearchBrowseJumpComponent;
  let fixture: ComponentFixture<SearchBrowseJumpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBrowseJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBrowseJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
