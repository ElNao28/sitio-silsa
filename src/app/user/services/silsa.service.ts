import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendEmail } from '../interfaces/SendEmail.interface';
import { ResponseBack } from '../interfaces/Response.interface';
import { Horarios } from '../../admin/interfaces/Horarios.interface';

@Injectable({
  providedIn: 'root'
})
export class SilsaService {

  constructor(private http:HttpClient) { }
  //esta funcion se encarga de enviar los datos del formulario de contacto
  sendDataForm(data:SendEmail){
    return this.http.post<ResponseBack>('http://localhost:3000/send-email',data)
  }
  //esta funcion se encarga de confirmar el codigo de la cita
  confirmCode(code:{code:string}){
    return this.http.post<ResponseBack>('http://localhost:3000/citas/confirm-code',code)
  }
  getHorarios(){
    return this.http.get<Horarios[]>('http://localhost:3000/citas')
  }

  sendCodeByConfirmation(dataCita:any){
    return this.http.post<ResponseBack>('http://localhost:3000/citas/send-code',dataCita)
  }
}
