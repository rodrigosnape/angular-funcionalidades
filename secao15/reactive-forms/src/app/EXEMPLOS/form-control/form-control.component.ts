import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent implements OnInit{

  /* nome = new FormControl('Inicial', [Validators.required]); */
  //nonNullable não deixa o valor inicial ser resetado. Ele, quando for resetado, volta para o valor inicial
  nome = new FormControl('Inicial', { nonNullable: true, validators: [Validators.required] });

  ngOnInit() {
    console.log(this.nome);
  }

  mostrarStatus(){
    console.log(this.nome);
  }

  alterarValor(){
    this.nome.setValue("Renato");
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
     /* this.nome.reset(); */
     this.nome.reset('Passando um valor durante o reset');
  }
}
