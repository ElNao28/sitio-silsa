import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutAdminPageComponent } from './pages/layout-admin-page/layout-admin-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewCitasComponent } from './pages/view-citas/view-citas.component';
import { ViewNoticiasComponent } from './pages/view-noticias/view-noticias.component';
import { ViewPerfilComponent } from './pages/view-perfil/view-perfil.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AdministrarCitasComponent } from './pages/administrar-citas/administrar-citas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNoticiaComponent } from './pages/add-noticia/add-noticia.component';
import { EditNoticiaComponent } from './pages/edit-noticia/edit-noticia.component';

@NgModule({
  declarations: [
    LayoutAdminPageComponent,
    LoginComponent,
    DashboardComponent,
    ViewCitasComponent,
    ViewNoticiasComponent,
    ViewPerfilComponent,
    AddUserComponent,
    AdministrarCitasComponent,
    AddNoticiaComponent,
    EditNoticiaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RecaptchaModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
