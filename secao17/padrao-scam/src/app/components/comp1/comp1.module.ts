import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import { ShowTextPipeModule } from '../../pipes/show-text-pipe/show-text-pipe.module';
import { TransformTextPipeModule } from '../../pipes/transform-text-pipe/transform-text-pipe.module';


@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    ShowTextPipeModule,
    TransformTextPipeModule,
  ],
  exports: [
    Comp1Component
  ],
})
export class Comp1Module { }
