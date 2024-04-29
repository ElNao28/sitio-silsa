import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { DCEComponent } from './pages/dce/dce.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'inicio',
        component:InicioComponent
      },
      {
        path:'conocenos',
        component:ConocenosComponent
      },
      {
        path:'dce',
        component:DCEComponent
      },
      {
        path:'servicios',
        component:ServiciosComponent
      },
      {
        path:'noticias',
        component:NoticiasComponent
      },
      {
        path:'contacto',
        component:ContactoComponent
      },
      {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
