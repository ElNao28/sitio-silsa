import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuVar } from '../../interfaces/MenuVar.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  varMenu: boolean = false;
  dataMenuVar: MenuVar = {
    title:'',
    subTitle:[]
  }
  dataSubMenu:{title:string, content:string} = {
    title:'',
    content:''
  };
  activateMenuVar(type:number) {
    switch (type) {
      case 0:
        this.showConocenos();
        this.dataSubMenu = {
          title: 'Nuestra Historia',
          content: this.dataMenuVar.subTitle[0].description
        }
        break;
      case 1:
        this.showServices();
        this.dataSubMenu = {
          title: this.dataMenuVar.subTitle[0].title,
          content: this.dataMenuVar.subTitle[0].description
        }
        break;
    }
    this.varMenu =! this.varMenu;

  }
  deactivateMenuVar() {
    this.varMenu = false;
  }
  showServices() {
    this.dataMenuVar = {
      title: 'Servicios',
      subTitle: [
        {
          title: 'Tecnologías de la Información, Comunicación y Desarrollo',
          description:'Integrar la promoción de las tecnologías de la información y de la comunicación en la Comunidad Emprearial con el fin de usarlas por interno y externos calificados por SILSA.',
          url: ''
        },
        {
          title: 'Acceso al Financiamiento (AFI)',
          description:'El Diagnostico,Análisis y Vinculación a opciones de fuentes de financiamiento con Banca Comercial y/o Banca de Desarrollo del Gobierno Federal o Estatal, a través de consultores internos y externos, calificados por SILSA. SILSA Consultores a apoyado a Dispersar: $135,000,000.00 (Ciento treinta y cinco millones de pesos 00/100 MN)',
          url: ''
        },
        {
          title: 'Consultoría Empresarial (CEM)',
          description:'El Análisis de consultoría es un diagnóstico en el que una mirada externa y prefesional identifica las problemáticas, propone las soluciones que aseguran una mayor rentabilidad y motiva la toma de decisiones, a través de consultores internos y externos, calificados por SILSA, SILSA Consultores a apoyado a Dispersar: $2,360,000.00 (Dos millones trescientos sesenta mil pesos 00/100 MN)',
          url: ''
        },
        {
          title: 'Capacitación empresarial(CE)',
          description:'',
          url: ''
        },
        {
          title: 'Proyectos Estratégicos (PROYEST)',
          description:'',
          url: ''
        },
        {
          title: 'Incubadora de Negocios Tradicionales y Recursos Gubernamentales (INER)',
          description:'',
          url: ''
        },
        {
          title: 'Comercialización (COMER)',
          description:'',
          url: ''
        },
        {
          title: 'Tecnologías de la Información y Comunicación, Comercialización',
          description:'',
          url: ''
        },
      ]
    }
  }
  showConocenos() {
    this.dataMenuVar = {
      title: 'Conocenos',
      subTitle: [
        {
          title: 'Nuestra Historia',
          description:'Mira un poco de nuestra trayectoria a lo largo de los años desde la creacion de esta gran familia silsa.',
          url: '/conocenos'
        },
        {
          title: 'Silsa team',
          description:'Conoce a nuestros equipo de contribuyentes y amigos que apoyan y dan crecimiento a esta gran familia silsa.',
          url: '/silsa-team'
        },
        {
          title: 'Trabaja con nosotros',
          description:'Envianos tus datos para poder conocerte y puedas formar parte de la familia silsa.',
          url: '/form-postulacion'
        },
        {
          title: '¿Necesitas ayuda?',
          description:'¿Necesitas ayuda en algo?,¿Buscas algun apoyo?, No te preocupes, mandanos tu informacion y recibe ayuda.',
          url: ''
        },
        {
          title: 'Haz tus practicas con nostros',
          description:'¿Eres egredado o estas apunto de graduarte?, Puedes hacer tus practicas profecionales con nosotros, mandanos tu informacion y haz tus practicas con nostros.',
          url: ''
        },
        {
          title: 'Agenda una cita',
          description:'¿Quieres tener una charla con algunos de nuestros asesores?, ¿Tienes una duda y quieres hablar personalmente?, agenda una cita y acude a la sucursal.',
          url: '/agendar-cita'
        }
      ]
    }
  }
  showSubMenu(title:string){
    for(let i = 0;i<this.dataMenuVar.subTitle.length;i++){
      if(this.dataMenuVar.subTitle[i].title == title){
        this.dataSubMenu = {
          title:title,
          content:this.dataMenuVar.subTitle[i].description
        };
      }
    }
  }
}
