import { Component, inject } from '@angular/core';
import { ObservableService } from './observable.service';
import { map, Subscription } from 'rxjs';

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
/*     this._observableService.obsSimples().subscribe((value) => {
      console.log(value);
    });

    this.subs = this._observableService.obsInterval().subscribe((value) =>{
      console.log(value);
    }) */

      // O Pipe também pode ser feito quando for feito o subscribe.
      // Mas desse jeito só aqui virá "mapeado" 
/*       this._observableService.getTodoInfos(1).pipe(
            map((todoResponse: any) => {
              const newTodo = {
                id: todoResponse.id,
                title: todoResponse.title,
              }
      
              return newTodo;
            })
          ).subscribe((response) => {
        console.log('Todo', response);
      }); */


      this._observableService.getTodoInfos(1).subscribe((response) => {
        console.log('Todo', response);
      });
  }

  unsubscribeInterval(){
    this.subs.unsubscribe();
  }
}
