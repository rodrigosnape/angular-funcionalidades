import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from './utils/custom-error-state-matcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss'],
  // providers: [
  //   {
  //     provide: ErrorStateMatcher,
  //     useClass: CustomErrorStateMatcher,
  //   }
  // ],
})
export class Ex2Component {
  matcher = new CustomErrorStateMatcher();
}
