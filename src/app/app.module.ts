//SERVICIOS
import { EquipoService } from './equipo.service'; 


import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    CuerpoComponent,
    EncabezadoComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
