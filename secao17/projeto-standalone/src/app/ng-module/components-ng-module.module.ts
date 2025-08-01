import { NgModule } from "@angular/core";
import { CompNoStandaloneComponent } from './comp-no-standalone/comp-no-standalone.component';
import { Comp1Component } from "../components/comp1/comp1.component";

@NgModule({
    declarations:[
    CompNoStandaloneComponent
  ],
  imports:[
    //Tem que importar o componente não-stantandalone para ser utilizado no standalone
    //Comp1Component
  ],
    exports:[
        CompNoStandaloneComponent
    ],
})
export class ComponentsNgModuleModule {}