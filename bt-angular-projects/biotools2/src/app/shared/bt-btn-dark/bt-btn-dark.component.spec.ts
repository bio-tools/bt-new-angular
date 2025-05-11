import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBtnDarkComponent } from './bt-btn-dark.component';

describe('BtBtnDarkComponent', () => {
  let component: BtBtnDarkComponent;
  let fixture: ComponentFixture<BtBtnDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtBtnDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBtnDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
