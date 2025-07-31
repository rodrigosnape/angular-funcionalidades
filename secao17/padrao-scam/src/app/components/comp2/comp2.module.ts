import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
import { ShowTextPipeModule } from '../../pipes/show-text-pipe/show-text-pipe.module';



@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    ShowTextPipeModule,
  ],
  exports: [
      Comp2Component
  ],
})
export class Comp2Module { }
