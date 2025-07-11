import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  condition: boolean = true;

  @Input({required: true}) header!: TemplateRef<any>;
  @Input({required: true}) content!: TemplateRef<any>;
  @Input() footer!: TemplateRef<any>;
}
