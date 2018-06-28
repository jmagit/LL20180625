import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { NotificationComponent } from './notification/notification.component';
import { PERSONAS_COMPONENTS } from './personas/personas.component';
import { PersonasVMService, PersonasVMDAOService } from './personas/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent,
    DinamicoComponent,
    NotificationComponent,
    PERSONAS_COMPONENTS
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MyCoreModule, ClientesModule,
  ],
  providers: [ LoggerService,
    {provide: ERROR_LEBEL, useValue: environment.ERROR_LEBEL },
    {provide: PersonasVMService, useClass: PersonasVMDAOService}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
