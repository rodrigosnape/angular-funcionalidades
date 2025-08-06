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

    async userTodos(){
      console.log('userTodos');

      //Calback Hell !!!
      //Não precisa do async no método
      /* this._promisesService.getUsers().then((response: any) => {
        this._promisesService.getUserTodos(response[0].id).then((userTodos) => {
          console.log(userTodos);
        });
      }) */

        //Solução elegante
        //Precisa do async no método
        try {
          console.log('Dentro do try');

          const usersList:any[] = await this._promisesService.getUsers() as any[];
  
          const userTodos = await this._promisesService.getUserTodos(usersList[0].id);
          
          console.log('Response User Todos: ',userTodos);

        } catch(error){ //só com o catch que se capturam o erros do await
          console.log('Catch', error);
        }

        console.log('final do userTodos()');

    }
}
