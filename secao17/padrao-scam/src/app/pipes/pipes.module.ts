import { NgModule } from "@angular/core";
import { ShowTextPipe } from './show-text.pipe';

@NgModule({
    declarations: [
        ShowTextPipe
  ],
    exports: [
        ShowTextPipe
    ],
})
export class PipesModule {}