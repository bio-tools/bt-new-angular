import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmallSpinnerComponent } from './small-spinner.component';

describe('SmallSpinnerComponent', () => {
  let component: SmallSpinnerComponent;
  let fixture: ComponentFixture<SmallSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
