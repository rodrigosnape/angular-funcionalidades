import { Component, inject } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable-simples',
  standalone: true,
  imports: [],
  templateUrl: './observable-simples.component.html',
  styleUrl: './observable-simples.component.scss'
})
export class ObservableSimplesComponent {
  private readonly _observableService = inject(ObservableService);

  ngOnInit(){
    this._observableService.obsSimples().subscribe((value) => {
      console.log(value);
    });
  }
}
