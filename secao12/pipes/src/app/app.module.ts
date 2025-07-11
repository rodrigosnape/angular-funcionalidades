import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/YYYY',
  timezone: '+0000'
}

registerLocaleData(localePT, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: DATE_PIPE_DEFAULT_OPTIONS, 
      useValue: datePipeConfig
    }, {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
