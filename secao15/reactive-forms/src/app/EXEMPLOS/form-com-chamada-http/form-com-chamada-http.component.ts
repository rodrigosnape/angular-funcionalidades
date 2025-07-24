import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})
export class FormComChamadaHttpComponent implements OnInit{

  pessoaForm!: FormGroup;

  constructor(private readonly _userService: UserService){}

  ngOnInit() {
    this.createPessoaForm();
    this.getUserAndFullfilPessoaForm();
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  private createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefones: new FormArray([]),
    })
  }

  private getUserAndFullfilPessoaForm(){
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    })
  }

  private fullfilPessoaForm(userResponse: any){
    this.pessoaForm.patchValue(userResponse);
    this.telefones.clear();

    userResponse.telefones.forEach((tel:any) => {
      this.telefones.push(new FormGroup({
        numero: new FormControl(tel.numero),
        ddd: new FormControl(tel.ddd)
      }));
    });

    console.log(this.pessoaForm);
  }
}
