import { CommonModule, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TransformTextPipe } from '../../pipes/transform-text.pipe';
import { ChangeTextColorDirective } from '../../directives/change-text-color.directive';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [
    //NgIf,
    //NgFor,
    //LowerCasePipe,
    CommonModule,
    TransformTextPipe,
    ChangeTextColorDirective,
  ],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

}
