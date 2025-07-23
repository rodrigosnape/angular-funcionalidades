import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit{
  pessoaForm!: FormGroup;

  constructor(private readonly _fb: FormBuilder){}

  ngOnInit() {
    //Maneira mais "fácil" utilizando:
    //group()
    //control()
    //array()
    this.pessoaForm = this._fb.group({
      nome: ['Rodrigo', [Validators.required]],
      email: this._fb.control('qq@qq.com', { validators: Validators.required}),
      endereco: this._fb.group({
        rua: ['Verde',  [Validators.required]],
        numero: ['00',  [Validators.required]],
      }),
      musicas: this._fb.array([
        ['',  [Validators.required]]
      ])
    });
  }

  get rua(): FormControl{
    return this.pessoaForm.get('endereco')?.get('rua') as FormControl;
  }
  get numero(): FormControl{
    return this.pessoaForm.get('endereco')?.get('numero') as FormControl;
  }

  get musicas(): FormArray{
    return this.pessoaForm.get('musicas') as FormArray;
  }

  mostrarStatus(){
    console.log(this.pessoaForm);
  }

  adicionarMusica() {
    this.musicas.push(new FormControl('', [Validators.required]));
  }

  removerMusica(musicaIndex:number) {
    this.musicas.removeAt(musicaIndex);
  }
}
