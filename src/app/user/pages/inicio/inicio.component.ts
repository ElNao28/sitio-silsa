import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenes:string[] = [
    'https://img.freepik.com/foto-gratis/papel-pintado-gatito-lindo-fantasia_1409-6188.jpg',
    'https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg',
    'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg'
  ];
}
