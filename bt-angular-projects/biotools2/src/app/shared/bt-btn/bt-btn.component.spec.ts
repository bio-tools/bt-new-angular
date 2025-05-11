import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnComponent } from './bt-btn.component';

describe('BtBtnComponent', () => {
  let component: BtBtnComponent;
  let fixture: ComponentFixture<BtBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
