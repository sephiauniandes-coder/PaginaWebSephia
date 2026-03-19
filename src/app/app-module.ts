import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Dron } from './projects/dron/dron';
import { Datos } from './projects/datos/datos';
import { Agriculturaurbana } from './projects/agriculturaurbana/agriculturaurbana';
import { Burrito } from './projects/burrito/burrito';
import { Fertirriego } from './projects/fertirriego/fertirriego';
import { Caja } from './projects/caja/caja';
import { Home } from './components/home/home';
import { Historia } from './components/historia/historia';
import { Equipo } from './components/equipo/equipo';
import { Noticias } from './components/noticias/noticias';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    App,
    Navbar,
    Dron,
    Datos,
    Agriculturaurbana,
    Burrito,
    Fertirriego,
    Caja,
    Home,
    Historia,
    Equipo,
    Noticias,
    Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
