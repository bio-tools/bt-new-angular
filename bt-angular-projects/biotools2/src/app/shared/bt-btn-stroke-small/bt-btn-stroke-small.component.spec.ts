import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnStrokeSmallComponent } from './bt-btn-stroke-small.component';

describe('BtBtnStrokeSmallComponent', () => {
  let component: BtBtnStrokeSmallComponent;
  let fixture: ComponentFixture<BtBtnStrokeSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnStrokeSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnStrokeSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
