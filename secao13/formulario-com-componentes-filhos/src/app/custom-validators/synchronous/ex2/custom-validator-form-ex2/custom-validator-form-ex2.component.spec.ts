import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorFormEx2Component } from './custom-validator-form-ex2.component';

describe('CustomValidatorFormEx2Component', () => {
  let component: CustomValidatorFormEx2Component;
  let fixture: ComponentFixture<CustomValidatorFormEx2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidatorFormEx2Component]
    });
    fixture = TestBed.createComponent(CustomValidatorFormEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
