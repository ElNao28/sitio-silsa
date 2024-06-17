import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { DCEComponent } from './pages/dce/dce.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { TeamComponent } from './pages/team/team.component';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { ConfirmarCitaComponent } from './pages/confirmar-cita/confirmar-cita.component';
import { ViewNoticiaComponent } from './pages/view-noticia/view-noticia.component';
//Este modulo sirve para declarar todos los componentes del lado usuario
@NgModule({
  declarations: [
    InicioComponent,
    LayoutPageComponent,
    DCEComponent,
    NoticiasComponent,
    ServiciosComponent,
    ContactoComponent,
    ConocenosComponent,
    TeamComponent,
    AgendarCitaComponent,
    ConfirmarCitaComponent,
    ViewNoticiaComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
  ]
})
export class UserModule { }
