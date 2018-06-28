import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent,
    DinamicoComponent,
    NotificationComponent,
    PERSONAS_COMPONENTS,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(routes),
    MyCoreModule, ClientesModule,
  ],
  providers: [ LoggerService,
    {provide: ERROR_LEBEL, useValue: environment.ERROR_LEBEL },
    {provide: PersonasVMService, useClass: PersonasVMDAOService}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
