import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResourceComponent } from './form-resource.component';

describe('FormResourceComponent', () => {
  let component: FormResourceComponent;
  let fixture: ComponentFixture<FormResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
