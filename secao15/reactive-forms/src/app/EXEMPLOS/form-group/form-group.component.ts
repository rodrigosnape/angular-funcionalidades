import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),

  });

  constructor(){
    console.log(this.pessoaForm);

    console.log(this.pessoaForm.get('nome')?.valid);
  }

  get nome(): FormControl{
    return this.pessoaForm.get('nome') as FormControl;
  }
  
  get email(): FormControl{
    return this.pessoaForm.get('email') as FormControl;
  }

  mostrarValue(){
    console.log(this.pessoaForm.value);
    console.log(this.nome);
  }
}
