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

@NgModule({
  declarations: [
    InicioComponent,
    LayoutPageComponent,
    DCEComponent,
    NoticiasComponent,
    ServiciosComponent,
    ContactoComponent,
    ConocenosComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule
  ]
})
export class UserModule { }
