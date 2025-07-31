import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Module } from './components/comp1/comp1.module';
import { Comp2Module } from './components/comp2/comp2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Comp1Module,
    Comp2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
