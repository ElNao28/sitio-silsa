import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminPageComponent } from './pages/layout-admin-page/layout-admin-page.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewCitasComponent } from './pages/view-citas/view-citas.component';
import { ViewPerfilComponent } from './pages/view-perfil/view-perfil.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ViewNoticiasComponent } from './pages/view-noticias/view-noticias.component';
import { AdministrarCitasComponent } from './pages/administrar-citas/administrar-citas.component';
import { AddNoticiaComponent } from './pages/add-noticia/add-noticia.component';
import { EditNoticiaComponent } from './pages/edit-noticia/edit-noticia.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutAdminPageComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent,
        children:[
          {
            path:'citas',
            component:ViewCitasComponent
          },
          {
            path:'administrar-citas',
            component:AdministrarCitasComponent,
          },
          {
            path:'noticias',
            component:ViewNoticiasComponent
          },
          {
            path:'perfil',
            component:ViewPerfilComponent
          },
          {
            path:'add-user',
            component:AddUserComponent
          },
          {
            path:'add-noticia',
            component:AddNoticiaComponent
          },
          {
            path:'edit-noticia/:id',
            component:EditNoticiaComponent
          },
          {
            path:'**',
            redirectTo:'citas'
          }
        ]
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
