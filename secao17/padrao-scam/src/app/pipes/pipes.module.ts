import { NgModule } from "@angular/core";
import { ShowTextPipe } from './show-text.pipe';
import { TransformTextPipe } from './transform-text.pipe';

@NgModule({
    declarations: [
        ShowTextPipe,
        TransformTextPipe
  ],
    exports: [
        ShowTextPipe,
        TransformTextPipe
    ],
})
export class PipesModule {}