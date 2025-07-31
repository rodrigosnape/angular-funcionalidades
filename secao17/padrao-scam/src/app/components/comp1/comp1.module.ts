import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    Comp1Component
  ],
})
export class Comp1Module { }
