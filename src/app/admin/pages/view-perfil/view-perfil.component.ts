import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Data } from '../../interfaces/GetProfile.interface';

@Component({
  selector: 'app-view-perfil',
  templateUrl: './view-perfil.component.html',
  styleUrl: './view-perfil.component.css'
})
export class ViewPerfilComponent implements OnInit{
  constructor(private adminsServie:AdminService){}
  dataProfile:Data = {
    nombre: '',
    apellido: '',
    apellidoM: '',
    telefono:  '',
    email:     '',
    genero:    '',
    foto:      '',
  };
  ngOnInit(): void {
    const idUser = localStorage.getItem('token');
    if(idUser !== null){
      this.adminsServie.getProfile(idUser).subscribe(data =>{
        this.dataProfile =  data.data
      })
    }
  }
}
