import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartmentQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartmentQuantityValidatorDirective,
      multi: true
    }
  ]
})
export class DepartmentQuantityValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('control',control)

    if(control.value.departamento === 'IT' && +control.value.quantidade > 10){
      return { 'invalidITQuantity': true }
    }
    if(control.value.departamento === 'HR' && +control.value.quantidade > 20){
      return { 'invalidHRQuantity': true }
    }


    return null
  }

}
