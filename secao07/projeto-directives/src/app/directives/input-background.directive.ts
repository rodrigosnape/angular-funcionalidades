import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {

  //Tem o mesmo nome da diretiva para "economizar" texto no html
  @Input() appInputBackground: string = 'white';

  //Alias tb funciona aqui dentro
  @Input('tColor') textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor:string = '';
  @HostBinding('style.color') color:string = '';

  @HostListener('focus') onFocus(){
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }

  @HostListener('blur') onBlur(){
    this.bgColor = 'white';
      this.color = 'black';
  }
}
