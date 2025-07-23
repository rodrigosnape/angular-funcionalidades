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
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
    }),
  } , {
    updateOn: 'blur'
  });

  constructor(){
    console.log(this.pessoaForm);

    console.log(this.pessoaForm.get('nome')?.valid);


    this.pessoaForm.valueChanges.subscribe((value) => console.log('valueChanges => Pessoa Form', value));
  }

  get nome(): FormControl{
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl{
    return this.pessoaForm.get('email') as FormControl;
  }

  get rua(): FormControl{
    return this.pessoaForm.get('endereco')?.get('rua') as FormControl;
  }

  get numero(): FormControl{
    return this.pessoaForm.get('endereco')?.get('numero') as FormControl;
  }

  mostrarValue(){
    console.log(this.pessoaForm.value);
    console.log(this.nome);
  }

  onFormSubmit() {
    console.log('onFormSubmit');
    console.log(this.pessoaForm.value);
  }

  alteracaoTotal() {
    console.log('alteracaoTotal');
    //Sempre que for executado o setValue ele dispara o valueChanges (linha 27)
    this.pessoaForm.setValue({
      nome: 'Rodrigo Veiga',
      email: 'rodrigo@veiga.com',
      endereco: {
        rua: "Rua Nova",
        numero: "000"
      }
    });
  }

  alteracaoParcial(){
    console.log('alteracaoParcial');
    //Sempre que for executado o patchValue ele TAMBÉM dispara o valueChanges (linha 27)
    this.pessoaForm.patchValue({
      nome: 'Renato Alves',
      endereco: {
        rua: "Verde"
      }
    })
  }

}
