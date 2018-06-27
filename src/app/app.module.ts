import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { NotificationComponent } from './notification/notification.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent,
    DinamicoComponent,
    NotificationComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MyCoreModule, ClientesModule,
  ],
  providers: [ LoggerService,
    {provide: ERROR_LEBEL, useValue: environment.ERROR_LEBEL }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
