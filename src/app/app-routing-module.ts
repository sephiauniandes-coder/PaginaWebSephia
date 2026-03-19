import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Dron } from './projects/dron/dron';
import { Datos } from './projects/datos/datos';
import { Agriculturaurbana } from './projects/agriculturaurbana/agriculturaurbana';
import { Burrito } from './projects/burrito/burrito';
import { Fertirriego } from './projects/fertirriego/fertirriego';
import { Caja } from './projects/caja/caja';
import { Historia } from './components/historia/historia';
import { Equipo } from './components/equipo/equipo';
import { Noticias } from './components/noticias/noticias';
import { Contacto } from './components/contacto/contacto';


const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'historia', component: Historia },
  { path: 'equipo', component: Equipo },
  { path: 'noticias', component: Noticias },
  { path: 'contacto', component: Contacto },


  { path: 'dron', component: Dron },
  { path: 'datos', component: Datos },
  { path: 'agricultura', component: Agriculturaurbana },
  { path: 'burrito', component: Burrito },
  { path: 'fertirriego', component: Fertirriego },
  { path: 'caja', component: Caja }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }