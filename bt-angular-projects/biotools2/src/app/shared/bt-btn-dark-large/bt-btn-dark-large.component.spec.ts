import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnDarkLargeComponent } from './bt-btn-dark-large.component';

describe('BtBtnDarkLargeComponent', () => {
  let component: BtBtnDarkLargeComponent;
  let fixture: ComponentFixture<BtBtnDarkLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnDarkLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnDarkLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
