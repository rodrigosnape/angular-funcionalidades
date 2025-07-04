import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  meuValor = 'Rodrigo';
  constructor(
    private _cdRef: ChangeDetectorRef
  ) { }

  changeDetection(){
    //Forçar a detecção de mudanças do Angular
    this._cdRef.detectChanges();
  }
}
