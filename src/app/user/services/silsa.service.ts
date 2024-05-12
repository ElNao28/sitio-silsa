import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendEmail } from '../interfaces/SendEmail.interface';
import { ResponseBack } from '../interfaces/Response.interface';
import { GetCitas } from '../interfaces/GetCitas.interface';
import { SendAgendar } from '../interfaces/SendAgendar.interface';

@Injectable({
  providedIn: 'root'
})
export class SilsaService {

  constructor(private http:HttpClient) { }
  //esta funcion se encarga de enviar los datos al servidor mediante el metodo POST
  sendDataForm(data:SendEmail){
    return this.http.post<ResponseBack>('http://localhost:3000/send-email',data)
  }
  getHorarios(){
    return this.http.get<GetCitas[]>('http://localhost:3000/citas')
  }
  sendCode(data:SendAgendar){
    return this.http.post<ResponseBack>('http://localhost:3000/citas/send-code',data)
  }
  confirmCode(code:{code:string}){
    return this.http.post<ResponseBack>('http://localhost:3000/citas/confirm-code',code)
  }
}
