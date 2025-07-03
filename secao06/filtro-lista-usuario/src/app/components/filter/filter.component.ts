import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  foods =[
  {
    value: 'steak-0',
    viewValue: 'Steak'
  },
  {
    value: 'pizza-1',
    viewValue: 'Pizza'
  },
  {
    value: 'tacos-2',
    viewValue: 'Tacos'
  }
]
}
