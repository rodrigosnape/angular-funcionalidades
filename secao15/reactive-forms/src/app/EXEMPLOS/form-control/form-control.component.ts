import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit{

/*   nome = new FormControl('Inicial', [
    Validators.required,
    Validators.minLength(6)
  ]); */
  //nonNullable não deixa o valor inicial ser resetado. Ele, quando for resetado, volta para o valor inicial
  nome = new FormControl('Inicial', { 
    nonNullable: true, 
    validators: [Validators.required, Validators.minLength(6), Validators.maxLength(7)], 
    updateOn: 'blur' 
  });

  ngOnInit() {
    console.log(this.nome);

    this.nome.valueChanges.subscribe((result) => console.log('valueChanges: ', result));

    this.nome.statusChanges.subscribe((result) => console.log('statusChange: ', result));
  }

  mostrarStatus(){
    console.log(this.nome);
  }

  alterarValor(){
    this.nome.setValue("Re");
  }

  inputAlterado(){
    console.log(this.nome.value);
  }

  desabilitar(){
    this.nome.disable();
  }

  habilitar(){
     this.nome.enable();
  }

  resetar(){
      this.nome.reset();
     //this.nome.reset('Passando um valor durante o reset');
  }

  setValidators(){
    this.nome.setValidators([]);
    this.nome.setValue('Opa!');
    //Sobrescreve TODOS os validadores existentes e troca pelo que está sendo setado agora
    this.nome.setValidators(Validators.minLength(6));
    this.nome.updateValueAndValidity();
  }

  addValidators(){
    //Adiciona aos validadores que já existem
    this.nome.addValidators(Validators.maxLength(7));
    this.nome.updateValueAndValidity();
  }
}
