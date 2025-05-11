import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EdamStartTermsComponent } from './edam-start-terms.component';

describe('EdamStartTermsComponent', () => {
  let component: EdamStartTermsComponent;
  let fixture: ComponentFixture<EdamStartTermsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EdamStartTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdamStartTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
