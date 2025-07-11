import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterContentInit{
  condition: boolean = true;

/*   @Input({required: true}) header!: TemplateRef<any>;
  @Input({required: true}) content!: TemplateRef<any>;
  @Input() footer!: TemplateRef<any>; */

  @ContentChild('meuTemplate') content!: TemplateRef<any>;

  ngOnInit(){
    console.log('OnInit', this.content)
  }

  ngAfterContentInit(){
    console.log('AfterContentInit', this.content)
  }
}
