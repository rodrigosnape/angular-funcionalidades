import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
      Comp2Component
  ],
})
export class Comp2Module { }
