import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderExternoComServiceComponent } from './form-builder-externo-com-service.component';

describe('FormBuilderExternoComServiceComponent', () => {
  let component: FormBuilderExternoComServiceComponent;
  let fixture: ComponentFixture<FormBuilderExternoComServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBuilderExternoComServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBuilderExternoComServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
