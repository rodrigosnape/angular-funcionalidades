import { Component } from '@angular/core';
import { PessoaFormController } from './pessoa-form-controller';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo',
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.scss'
})
export class FormBuilderExternoComponent extends PessoaFormController {
  constructor(private readonly _fbMain: FormBuilder){
    super(_fbMain);
  }
}
