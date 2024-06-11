import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horarios } from '../interfaces/Horarios.interface';
import { DataCitas } from '../interfaces/DataCitas.interface';
import { ResponseBack } from '../../user/interfaces/Response.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getHorarios(){
    return this.http.get<Horarios[]>('http://localhost:3000/citas');
  }
  getDataCitas(){
    return this.http.get<DataCitas>('http://localhost:3000/citas/data-citas');
  }
  saveHorario(data:any){
    return this.http.post<ResponseBack>('http://localhost:3000/citas/create-horario',data);
  }
  deleteHorario(id:number){
    return this.http.delete<ResponseBack>('http://localhost:3000/citas/delete-horario/'+id)
  }

}
