import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SilsaService } from '../../services/silsa.service';
import { environments } from '../../../../environments/environments';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private fb:FormBuilder,private silsaService:SilsaService){}
  public recapchaResolve = false;
  public keyReCapcha = environments.keyRecapcha;

  public formEmail:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    cellphone:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required,Validators.minLength(10)]]
  });

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
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

  rechapchaResolve(resp:any){
    this.recapchaResolve = true;
  }
}
