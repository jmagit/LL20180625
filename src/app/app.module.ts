import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyCoreModule, LoggerService } from '../my-core';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MyCoreModule, ClientesModule,
  ],
  providers: [ LoggerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
