import { Component, OnInit } from '@angular/core';
import { SilsaService } from '../../services/silsa.service';
import { GetCitas, Horario } from '../../interfaces/GetCitas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent implements OnInit{
  constructor(
    private silsaServices:SilsaService,
    private fb:FormBuilder,
  ) { }

  public dataHorarios:GetCitas[]= [];
  public dias:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  public diasDisponibles:number[] = [];
  public horarios:Horario[] = [];
  public selectHorario:number = 0;
  public formHorario:FormGroup = this.fb.group({
    id:['',Validators.required]
  });
  public formData:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    cellphone:['',[Validators.required]],
    message:['',[Validators.required]],
  });
  ngOnInit(): void {
   this.silsaServices.getHorarios().subscribe(data =>{
     this.dataHorarios = data;
     for(let i=0; i<this.dataHorarios.length; i++) {
      this.diasDisponibles.push(this.dataHorarios[i].dia)
     }
   })
  }
  next:boolean = false;

  changeForm(){
    this.next =!this.next;
  }

  dayFound(day:number){
    for(let i=0; i<this.diasDisponibles.length; i++){
      if(day === this.diasDisponibles[i]){
        return true;
      }
    }
    return false;
  }

  showHorario(day:number){
    for(let i=0; i<this.dataHorarios.length; i++){
      if(day === this.dataHorarios[i].dia){
        this.horarios = this.dataHorarios[i].horarios;
      }
    }
  }

  sendDataAndGetCode(){
    this.silsaServices.sendCode({
      id:this.formHorario.value.id,
      name:this.formData.value.name,
      email:this.formData.value.email,
      cellphone:this.formData.value.cellphone,
      message:this.formData.value.message
    }).subscribe(data =>{
      if(data.status === 200){
        this.formData.reset();
        this.next =!this.next;
        alert("Se a enviado un codigo de confirmacion a tu correo")
      }
      console.log(data);
    })
  }
}
