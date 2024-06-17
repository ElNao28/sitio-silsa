import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SilsaService } from '../../services/silsa.service';
import { environments } from '../../../../environments/environments';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  constructor(private fb:FormBuilder,private silsaService:SilsaService){}

  //esta variables es para checar que el recapcha allá sido resuelto
  public recapchaResolve = false;
  //esta variable contiene la llave del recapcha
  public keyReCapcha = environments.keyRecapcha;
  //aqui se declara el formulario del inicio/el primer formulario mostrado al usuario
  public formEmail:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    cellphone:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.minLength(10)]]
  });
  public isLoading:boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  //esta funcion escucha el evento, cuando se resuelve el recapcha
  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  //esta funcion se encarga de enviar el formulario de contacto al servidor
  sendDataEmail(){
    if(this.formEmail.invalid)return alert("Formulario invalido")
      if(!this.recapchaResolve) return alert("Resuelve el recapcha")
      this.silsaService.sendDataForm(this.formEmail.value).subscribe(data =>{
        if(data.status === 200){
          alert("Mensaje enviado")
          this.formEmail.reset()
        }
      })
  }
  //Esta funcion se encarga de poner la variable que controla el estado del recapcha en verdadero para que permita enviar el email
  rechapchaResolve(resp:any){
    this.recapchaResolve = true;
  }
}
