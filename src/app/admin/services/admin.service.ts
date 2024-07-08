import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horarios } from '../interfaces/Horarios.interface';
import { DataCitas } from '../interfaces/DataCitas.interface';
import { ResponseBack } from '../../user/interfaces/Response.interface';
import { Noticia, Noticias } from '../interfaces/DataNoticias.interfaces';
import { CreateNoticia } from '../interfaces/CreateNoticia.interface';
import { Login } from '../interfaces/ResponseLogin.interface';
import { CheckRol } from '../interfaces/CheckRol.interface';

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
  createNoticia(dataNoticia:CreateNoticia){
    return this.http.post<ResponseBack>('http://localhost:3000/noticias/create-noticia',dataNoticia);
  }
  getNoticias(){
    return this.http.get<Noticias>('http://localhost:3000/noticias');
  }
  getNoticiaById(id:number){
    return this.http.get<Noticia>('http://localhost:3000/noticias/'+id);
  }
  deleteNoticia(id:number){
    return this.http.delete<ResponseBack>('http://localhost:3000/noticias/delete/'+id)
  }
  desactivateNoticia(id:number){
    return this.http.post<ResponseBack>('http://localhost:3000/noticias/desactivate/'+id,null)
  }
  activateNoticia(id:number){
    return this.http.post<ResponseBack>('http://localhost:3000/noticias/activate/'+id,null)
  }
  updateNoticia(id:string,dataNoticia:CreateNoticia){
    return this.http.patch<ResponseBack>('http://localhost:3000/noticias/update-noticia/'+id,dataNoticia);
  }
  loginAdmin(data:any){
    return this.http.post<Login>('http://localhost:3000/acounts/login',data);
  }
  checkRol(id:string){
    return this.http.post<CheckRol>('http://localhost:3000/acounts/rol/',{id:id});
  }
}
