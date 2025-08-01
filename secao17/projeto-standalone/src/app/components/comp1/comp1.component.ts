import { CommonModule, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [
    //NgIf,
    //NgFor,
    //LowerCasePipe,
    CommonModule,
  ],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

}
