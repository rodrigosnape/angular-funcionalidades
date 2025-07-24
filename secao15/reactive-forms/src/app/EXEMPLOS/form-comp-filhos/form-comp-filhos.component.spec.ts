import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompFilhosComponent } from './form-comp-filhos.component';

describe('FormCompFilhosComponent', () => {
  let component: FormCompFilhosComponent;
  let fixture: ComponentFixture<FormCompFilhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCompFilhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCompFilhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
