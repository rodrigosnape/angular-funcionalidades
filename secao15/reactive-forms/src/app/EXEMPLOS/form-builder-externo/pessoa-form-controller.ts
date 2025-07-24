import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class PessoaFormController {
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
}