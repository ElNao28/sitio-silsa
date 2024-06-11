import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataCitas } from '../../interfaces/DataCitas.interface';

@Component({
  selector: 'app-view-citas',
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})
export class ViewCitasComponent implements OnInit{

  constructor(private adminService:AdminService){}

  public dataCitas:DataCitas = {
    horarios: []
  };

  ngOnInit(): void {
    this.adminService.getDataCitas().subscribe(data => {
      this.dataCitas = data;
    });
  }

}
