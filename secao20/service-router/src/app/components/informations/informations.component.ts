import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {

  nome: string = '';
  idade: string = '';

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.nome = this._activatedRoute.snapshot.queryParams['nome'];
    this.idade = this._activatedRoute.snapshot.queryParams['idade'];
  }
}
