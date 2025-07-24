import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioTouchedComponent } from './desafio-touched.component';

describe('DesafioTouchedComponent', () => {
  let component: DesafioTouchedComponent;
  let fixture: ComponentFixture<DesafioTouchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioTouchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesafioTouchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
