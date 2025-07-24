import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

function testeValidator(): ValidatorFn{
  return (): ValidationErrors | null => {
    console.log('VALIDADOR')
    return null;
  } 
}

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})
export class MarkAsTouchedComponent implements OnInit{

  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, testeValidator]),
    email: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {

    this.pessoaForm.get('nome')?.statusChanges.subscribe((value) => console.log('Status Cahges Nome =>', value));

    setTimeout(() => {
      console.log('Touched PessoaForma', this.pessoaForm.touched);
      console.log('Touched NomeControl', this.pessoaForm.get('nome')?.touched);
      console.log('Touched EmailControl', this.pessoaForm.get('email')?.touched);
    } , 3000);
  }

  markNomeAsTouched() {
    console.log('markNomeAsTouched');
    /* this.pessoaForm.get('nome')?.markAsTouched({onlySelf: true}); */
    //NÃO chama nenhum validador
    this.pessoaForm.get('nome')?.markAsTouched();

    //FORÇA as validações
    this.pessoaForm.get('nome')?.updateValueAndValidity();


  }
}
