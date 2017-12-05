import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepdetailsComponent } from './form-depdetails.component';

describe('FormDepdetailsComponent', () => {
  let component: FormDepdetailsComponent;
  let fixture: ComponentFixture<FormDepdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDepdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDepdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
