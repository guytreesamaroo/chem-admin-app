import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLecturerComponent } from './form-lecturer.component';

describe('FormLecturerComponent', () => {
  let component: FormLecturerComponent;
  let fixture: ComponentFixture<FormLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
