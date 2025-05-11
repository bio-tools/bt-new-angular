import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnStrokeComponent } from './bt-btn-stroke.component';

describe('BtBtnStrokeComponent', () => {
  let component: BtBtnStrokeComponent;
  let fixture: ComponentFixture<BtBtnStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnStrokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
