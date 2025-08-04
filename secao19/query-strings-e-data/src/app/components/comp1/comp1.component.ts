import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit{
  /* @Input() nome: string = ''; */

  @Input() set nome(value: string){
    console.log('value ->', value);
  }

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    console.log('ngOnInit Comp1Component');
    console.log('nome ->', this.nome);
    //escuta apenas 1 vez
    console.log('snapshot ->',this._activatedRoute.snapshot.queryParams);
    //fica escuntando sempre
    this._activatedRoute.queryParams.subscribe(params => console.log('Subscribe Params ->', params));
  }
}
