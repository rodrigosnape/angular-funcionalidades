import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormComponent } from './elements/form/form.component';
import { NgModelGroupComponent } from './elements/ng-model-group/ng-model-group.component';
import { MainFormComponent } from './form-with-children/main-form/main-form.component';
import { FormUserComponent } from './form-with-children/form-user/form-user.component';
import { FormProfessionComponent } from './form-with-children/form-profession/form-profession.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    InputTextComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    NgModelGroupComponent,
    MainFormComponent,
    FormUserComponent,
    FormProfessionComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
