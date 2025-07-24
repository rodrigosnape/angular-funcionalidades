import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn:'root'
})
export class PessoaFormControllerService{
    pessoaForm!: FormGroup;

    constructor(private readonly _fb: FormBuilder){
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

    get nomeControl(): FormControl {
        return this.pessoaForm.get('nome') as FormControl;
    }

    get musicas(): FormArray {
        return this.pessoaForm.get('musicas') as FormArray;
    }
}