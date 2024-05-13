import { Component, OnInit } from '@angular/core';
import { SilsaService } from '../../../user/services/silsa.service';
import { GetCitas, Horario } from '../../../user/interfaces/GetCitas.interface';

@Component({
  selector: 'app-administrar-citas',
  templateUrl: './administrar-citas.component.html',
  styleUrl: './administrar-citas.component.css'
})
export class AdministrarCitasComponent implements OnInit{

  constructor(private silsaService:SilsaService){}

  public citas:GetCitas[] = [];
  public fecha = new Date().toLocaleDateString();
  public dayActually:number = parseInt(this.fecha.split('/')[0]);
  public days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  public horarios:Horario[] = [];
  public daySelected:number = 0;

  ngOnInit(): void {
    this.silsaService.getHorarios().subscribe(data =>{
      this.citas = data;
    });
    this.daySelected = this.dayActually;
  }

  isActive(day:number){
    for(let i = 0; i< this.citas.length; i++){
      if(this.citas[i].dia === day){
        return true;
      }
    }
    return false;
  }

  showHorarios(day:number){
    this.daySelected = day;
    for(let i = 0; i< this.citas.length; i++){
      if(this.citas[i].horarios.length <= 0){
        this.horarios = [];
        return;
      }
      if(this.citas[i].dia === day){
        this.horarios = this.citas[i].horarios;
      }
    }
  }
}
