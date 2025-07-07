import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  //static: true   torna o ViewChild já disponível no ngOnInit. O default é false
  //é apenas para HTML totalmente estáticos. Se tiver algum binding NÃO FUNCIONA
  //Evitar usar esse static...
  @ViewChild('meuInput', { static: true}) meuInput!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  //Vai disparar depois de todos os binds(ngFor, ngIf) resolvidos
  ngAfterViewInit() {
     console.log('ngAfterViewInit', this.meuInput)
    this.meuInput.nativeElement.focus();
  }

  ngOnInit() {
    console.log('ngOnInit', this.meuInput)
    this.meuInput.nativeElement.focus();
  }

}
