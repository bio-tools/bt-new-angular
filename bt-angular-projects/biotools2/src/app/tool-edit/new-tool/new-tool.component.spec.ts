import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToolComponent } from './new-tool.component';

describe('NewToolComponent', () => {
  let component: NewToolComponent;
  let fixture: ComponentFixture<NewToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
