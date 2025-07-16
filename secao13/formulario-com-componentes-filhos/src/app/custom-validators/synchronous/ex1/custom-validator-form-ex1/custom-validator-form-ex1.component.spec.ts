import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorFormEx1Component } from './custom-validator-form-ex1.component';

describe('CustomValidatorFormEx1Component', () => {
  let component: CustomValidatorFormEx1Component;
  let fixture: ComponentFixture<CustomValidatorFormEx1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidatorFormEx1Component]
    });
    fixture = TestBed.createComponent(CustomValidatorFormEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
