import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  //Apenas depois da inscrição é que mostra o resultado
  //private readonly valueChanged$ = new Subject<number>();  

  //Sempre mostra o último resultado, por isso ele TEM que tem um valor inicial
  private readonly valueChanged$ = new BehaviorSubject<number>(1000); 


  valueChanged(): Observable<number>{
    return this.valueChanged$.asObservable();
  }

  emitValue(num: number) {
    this.valueChanged$.next(num);
  }
}
