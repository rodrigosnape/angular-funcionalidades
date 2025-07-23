import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorAssincronoComponent } from './EXEMPLOS/validador-assincrono/validador-assincrono.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
