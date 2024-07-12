import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataCitas } from '../../interfaces/DataCitas.interface';
import { ExelService } from '../../services/exel.service';

@Component({
  selector: 'app-view-citas',
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})
export class ViewCitasComponent implements OnInit{

  constructor(private adminService:AdminService,private exelService:ExelService){}

  public dataCitas:DataCitas = {
    horarios: []
  };

  ngOnInit(): void {
    this.adminService.getDataCitas().subscribe(data => {
      this.dataCitas = data;
      console.log(this.dataCitas);
    });
  }
  public exportExcel(): void {

    const newDataByExcel = this.dataCitas.horarios.map(data =>{
      return {
        id: data.id,
        hora: data.hora,
        fecha: data.fecha,
        status: data.status,
        nombre:data.dataCita.name,
        apellido: data.dataCita.lastname,
        apellidoMaterno: data.dataCita.motherlastname,
        email: data.dataCita.email,
        celular: data.dataCita.cellphone,
        asunto: data.dataCita.asunto,
      }
    });

    this.exelService.exportAsExcelFile(newDataByExcel, 'Lista de citas');
  }
}
