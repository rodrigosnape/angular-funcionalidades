import { Component, inject } from '@angular/core';
import { PromisesService } from './promises.service';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {
  
  private readonly _promisesService = inject(PromisesService);
  
  ngOnInit(){
/*     this._promisesService.promiseSimples().then( (value) => {
      console.log('Then ', value)
    });    */ 

/*       console.log('1');

      this._promisesService.promiseRejected()
        .then( () => console.log('Resolved'))
        .catch( (error) => {
          console.log("Catch", error);
        })
        .finally(() => {
          console.log("Finally");
        });

        console.log('2'); */
    }

    //Se 1 der erro, cai no catch (Não pega resposta de nenhuma)
    promiseAll(){
      Promise.all([
        this._promisesService.getUsers(),
        this._promisesService.getTodos(),
      ])
      .then( (response) => { console.log('Response', response) })
      .catch( (error) => { console.log('Erro', error) })
      .finally( () => console.log('Finally'));
    }

      //Se 1 der erro, cai no catch (Mas obtém a resposta da outra)
      promiseRace(){
      Promise.race([
        this._promisesService.getUsers(),
        this._promisesService.getTodos(),
      ])
      .then( (response) => { console.log('Response', response) })
      .catch( (error) => { console.log('Erro', error) })
      .finally( () => console.log('Finally'));
    }

      //Só cai no catch se TODAS derem erro (Mas obtém a resposta da outra)
      promiseAny(){
      Promise.any([
        this._promisesService.getUsers(),
        this._promisesService.getTodos(),
      ])
      .then( (response) => { console.log('Response', response) })
      .catch( (error) => { console.log('Erro', error) })
      .finally( () => console.log('Finally'));
    }

    //NUNCA cai no catch. Pega as responses com os valores (sucesso) e com reason(falha)
    promiseAllSettled(){
      Promise.allSettled([
        this._promisesService.getUsers(),
        this._promisesService.getTodos(),
      ])
      .then( (response) => { console.log('Response', response) })
      .catch( (error) => { console.log('Erro', error) })
      .finally( () => console.log('Finally'));
    }
}
