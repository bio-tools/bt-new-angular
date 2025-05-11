import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnDarkStrokeComponent } from './bt-btn-dark-stroke.component';

describe('BtBtnDarkStrokeComponent', () => {
  let component: BtBtnDarkStrokeComponent;
  let fixture: ComponentFixture<BtBtnDarkStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnDarkStrokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnDarkStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
