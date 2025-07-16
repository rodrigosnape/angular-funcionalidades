import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  nationalitySelected: number | undefined = 1;
  nationalities: { id: number; description: string }[] = [
    {
      id: 1,
      description: 'Brasileira',
    },
    {
      id: 2,
      description: 'Argentina',
    },
    {
      id: 3,
      description: 'Espanhola',
    },
  ];

  onChange(nationality: string) {
    console.log('onChange nationality', nationality);

    this.nationalitySelected = +nationality;
  }
}
