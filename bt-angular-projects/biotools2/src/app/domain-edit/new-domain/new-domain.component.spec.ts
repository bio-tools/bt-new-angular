import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDomainComponent } from './new-domain.component';

describe('NewDomainComponent', () => {
  let component: NewDomainComponent;
  let fixture: ComponentFixture<NewDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
