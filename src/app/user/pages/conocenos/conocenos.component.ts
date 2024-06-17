import { Component, OnInit } from '@angular/core';
interface EventItem {
  fecha?: string;
  contenido?: string;
}
@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent implements OnInit{
  //esta variable contiene los eventos que se muestran en la linea del tiem´p
  events: EventItem[];
  public isLoading: boolean = true;
  constructor() {
    this.events = [
      {
        fecha: '2005',
        contenido: 'Idea de conformar Silsa Consultores®.'
      },
      {
        fecha: '2007',
        contenido: 'Asesores Financieros a nivel Estatal y Federal.Participación como asesores en módulos México Emprende en Tamaulipas.'
      },
      {
        fecha: '2008',
        contenido: 'Facilitadores en el Programa Nacional de Incubación de Empresas Sociales FONAES.'
      },
      {
        fecha: '2009',
        contenido: 'Consultores en el programa nacional de consultoría PyME JICA.Capacitadores en ENCUENTROS NACIONALES E INTERNACIONALES de empresas sociales FONAES.'
      },
      {
        fecha: '2012',
        contenido: 'Capacitadores y consultores en el Programa Nacional de Microempresas y MiZapatería.'
      },
      {
        fecha: '2013',
        contenido: 'Constitución Legal de SILSA Consultores®, Sociedad Civil.Facilitadores del Programa Nacional LEGO® Serious Play y a nivel internacional en Santiago de Chile.NAFIN:-Apoyo a promotoria nacional en Tamaulipas.-Capacitador en Tamaulipas.-Asesores Financieros en los programas Desastre Natural 2013 y Fondo para la Frontera.'
      },
      {
        fecha: '2014',
        contenido: 'Proveedor de Soluciones Tecnologícas para micro y pequeñas empresas a nivel nacional.Apoyo como Asesores Financieros RAE a nivel Estatal y Nacional.'
      },
      {
        fecha: '2015',
        contenido: 'Proyecto de Modernización y Reactivación del Mercado Municipal de Altamira, Tamaulipas.Social Incuba: Reconocimiento como Incubadora Básica a nivel Nacional.Asesores en el proyecto para el Desarrollo de Capacidades Empresariales para Microempresas a traves de Tecnologías de la Información y Comunicación en el Edo. de Veracruz..'
      },
      {
        fecha: '2016',
        contenido: 'Facilitadores del Programa Municipal de Incubación en linea en Tamaulipas.'
      }
    ];
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
