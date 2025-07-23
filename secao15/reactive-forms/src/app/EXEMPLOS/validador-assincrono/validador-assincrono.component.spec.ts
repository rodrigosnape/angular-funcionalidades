import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorAssincronoComponent } from './validador-assincrono.component';

describe('ValidadorAssincronoComponent', () => {
  let component: ValidadorAssincronoComponent;
  let fixture: ComponentFixture<ValidadorAssincronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidadorAssincronoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadorAssincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
