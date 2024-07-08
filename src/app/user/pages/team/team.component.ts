import { Component, OnInit } from '@angular/core';
import { TeamData } from '../../interfaces/Team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  silsaTeam:TeamData[] = [
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Manuel Lleverino González',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Torreon, Coahuila',
      correo: 'coa35@silsaconsultores.com',
      whasatsapp: '871 7 56 93 77',
      telefono: '833 3 72 11 33',
      estado:'coahuila'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Raúl Héctor Cantú',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Av. Fundidora Cp 64010, Monterrey, Nuevo León.',
      correo: 'nle39@silsaconsultores.com',
      whasatsapp: '811 4 98 51 98',
      telefono: '833 3 72 11 33',
      estado:'nuevo leon'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Jaqueline Vicente Morales',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Benito Juárez 411, CP 89310 Tampico, Tamps',
      correo: 'tam38@silsaconsultores.com',
      whasatsapp: '833 3 77 94 50',
      telefono: '833 3 72 11 33',
      estado:'tamaulipas'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'María Del Carmen Domínguez Solís',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Paseo De Los Fresnos #129 Cp 87380, Matamoros, Tamaulipas',
      correo: 'tam22@silsaconsultores.com',
      whasatsapp: '868 1 26 85 17',
      telefono: '833 3 72 11 33',
      estado:'tamaulipas'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Eloy Guillermo Gutiérrez Reyna',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Cd Victoria, Tamaulipas',
      correo: 'tam41@silsaconsultores.com',
      whasatsapp: '834 1 65 06 18',
      telefono: '833 3 72 11 33',
      estado:'tamaulipas'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Elvia Alicia Martínez Quiñones',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Guadalupe, Zacatecas',
      correo: 'zac17@silsaconsultores.com',
      whasatsapp: '492 1 17 00 40',
      telefono: '833 3 72 11 33',
      estado:'zacatecas'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Heber De La Cruz Ruiz',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Benito De Juárez #1cp 99300, Jerez De García Salinas, Zacatecas.',
      correo: 'zac20@silsaconsultores.com',
      whasatsapp: '494 5 13 72 19',
      telefono: '833 3 72 11 33',
      estado:'zacatecas'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Heber De La Cruz Ruiz',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Mayo De 1812 # 211 Cp 20140, Aguascalientes, Aguascalientes.',
      correo: 'agu01_a@silsaconsultores.com',
      whasatsapp: '449 9 60 24 23',
      telefono: '833 3 72 11 33',
      estado:'aguascalientes'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Paola Ilian García casillas',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Aguascalientes, Aguascalientes',
      correo: 'agu01_b@silsaconsultores.com',
      whasatsapp: '449 9 07 39 76',
      telefono: '833 3 72 11 33',
      estado:'aguascalientes'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Javier López Medina',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Av. De La Cultura #140 C Cp 78290, San Luis Potosí, San Luis Potosí.',
      correo: 'slp28@silsaconsultores.com',
      whasatsapp: '444 5 81 03 84',
      telefono: '833 3 72 11 33',
      estado:'san luis'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Ever José Quintero Rivas',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Escontria Sur #282, Cp 79660, Cd Fernández, San Luis Potosí',
      correo: 'slp24_a@silsaconsultores.com',
      whasatsapp: '487 1 40 22 66',
      telefono: '833 3 72 11 33',
      estado:'san luis'
    },
    {
      img: '../../../../assets/img/ofinista.jpg',
      nombre: 'Eduardo Darío Mata Torres',
      cargo: 'Asesor experto | silsa team',
      ubicacion: 'Calle Plazuela Independencia #108 Cp. 79610, Rioverde, San Luis Potosí',
      correo: 'slp24_b@silsaconsultores.com',
      whasatsapp: '487 1 12 16 58',
      telefono: '833 3 72 11 33',
      estado:'san luis'
    },
  ];
  showTeam:TeamData[] = this.silsaTeam;
  public estado:string = 'todo';

  public isLoading: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  public filterTeam(): void {
    if (this.estado === 'todo') {
      this.showTeam = this.silsaTeam;
    } else {
      this.showTeam = this.silsaTeam.filter(team => team.estado === this.estado);
    }
  }
}
