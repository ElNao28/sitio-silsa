import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Datum } from '../../interfaces/DataNoticias.interfaces';

@Component({
  selector: 'app-view-noticias',
  templateUrl: './view-noticias.component.html',
  styleUrl: './view-noticias.component.css'
})
export class ViewNoticiasComponent implements OnInit{
  constructor(private adminService:AdminService){}
  public dataNoticias:Datum[] = [];
  ngOnInit(): void {
    this.adminService.getNoticias().subscribe(data => {
      this.dataNoticias = data.data;
    });
  }
  deleteNoticia(id:number){
    this.adminService.deleteNoticia(id).subscribe(data => {
      if(data.status === 200){
        alert("Eliminado exitosamente")
        this.adminService.getNoticias().subscribe(data => {
          this.dataNoticias = data.data;
        });
      }
    });
  }
  desactivateNoticia(idNoticia:number){
    this.adminService.desactivateNoticia(idNoticia).subscribe(data => {
      if(data.status === 200){
        alert("Desactivado exitosamente")
        this.adminService.getNoticias().subscribe(data => {
          this.dataNoticias = data.data;
        });
      }
    });
  }
  activateNoticia(idNoticia:number){
    this.adminService.activateNoticia(idNoticia).subscribe(data => {
      if(data.status === 200){
        alert("Activado exitosamente")
        this.adminService.getNoticias().subscribe(data => {
          this.dataNoticias = data.data;
        });
      }
    });
  }
}
