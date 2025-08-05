import { Component, inject } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-simples',
  standalone: true,
  imports: [],
  templateUrl: './observable-simples.component.html',
  styleUrl: './observable-simples.component.scss'
})
export class ObservableSimplesComponent {

  subs!: Subscription;

  private readonly _observableService = inject(ObservableService);

  ngOnInit(){
    this._observableService.obsSimples().subscribe((value) => {
      console.log(value);
    });

    this.subs = this._observableService.obsInterval().subscribe((value) =>{
      console.log(value);
    })
  }

  unsubscribeInterval(){
    this.subs.unsubscribe();
  }
}
