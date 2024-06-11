import { Component, OnInit } from '@angular/core';
import { SilsaService } from '../../services/silsa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environments } from '../../../../environments/environments';
import { Horarios } from '../../../admin/interfaces/Horarios.interface';
import { Horario } from '../../interfaces/GetCitas.interface';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {
  constructor(
    private silsaServices: SilsaService, // Servicio para obtener y enviar datos relacionados con citas
    private fb: FormBuilder, // Constructor para formularios reactivos
  ) { }

  public keyCapche:string = environments.keyRecapcha
  public next:boolean = false;
  public capchaResolve:boolean = false;
  public horarios:Horarios[] = [];
  public horas:Horario[] = [];

  public formData:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    lastname:['', [Validators.required]],
    motherlastname:['', [Validators.required]],
    cellphone:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]]
  });

  public formCita:FormGroup = this.fb.group({
    asunto:['', [Validators.required]],
    idHorario:['', [Validators.required]],
    idHora:['', [Validators.required]]
  });

  changeNextValue(){
    if(this.formData.invalid) return alert('Completa los campos')
    if(!this.capchaResolve) return alert('Resuelve el recaptcha')
    this.next =!this.next;
    this.silsaServices.getHorarios().subscribe(data =>{
      this.horarios = data;
    })
  }
  capchaIsResolve(){
    this.capchaResolve = true;
  }
  addHoras(idDate:string){
    for(let i=0;i<this.horarios.length;i++){
      if(this.horarios[i].id === parseInt(idDate)){
        this.horas = this.horarios[i].horarios;
        this.formCita.controls['idHora'].reset();
      }
    }
  }
  viewMes(mes: number){
    switch(mes){
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8: return 'Agosto';
      case 9: return 'Septiembre';
      case 10: return 'Octubre';
      case 11: return 'Noviembre';
      case 12: return 'Diciembre';
      default: return '';
    }
  }
  sendCodeByConfirmation(){
    if(this.formCita.invalid) return alert('Completa los campos')
    if(this.formCita.controls['idHora'].value === "Na") return console.log('eelige una opcion valida')

    const dataByUser = {
      name: this.formData.controls['name'].value,
      lastname: this.formData.controls['lastname'].value,
      motherlastname: this.formData.controls['motherlastname'].value,
      cellphone: this.formData.controls['cellphone'].value,
      email: this.formData.controls['email'].value,
      asunto: this.formCita.controls['asunto'].value,
      idHorario: this.formCita.controls['idHora'].value
    }
    this.silsaServices.sendCodeByConfirmation(dataByUser).subscribe(data =>{
      if(data.status === 200) return alert("Se anviado un codigo de confirmacion")
    });
    this.formCita.reset();
    this.formData.reset();
  }
}
