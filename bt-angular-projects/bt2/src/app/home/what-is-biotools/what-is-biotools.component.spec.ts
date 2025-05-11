import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WhatIsBiotoolsComponent } from './what-is-biotools.component';

describe('WhatIsBiotoolsComponent', () => {
  let component: WhatIsBiotoolsComponent;
  let fixture: ComponentFixture<WhatIsBiotoolsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsBiotoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsBiotoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
