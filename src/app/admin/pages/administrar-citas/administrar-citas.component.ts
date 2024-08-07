import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Horarios } from '../../interfaces/Horarios.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrar-citas',
  templateUrl: './administrar-citas.component.html',
  styleUrl: './administrar-citas.component.css'
})
export class AdministrarCitasComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }

  public isCreated: boolean = false;
  public fecha = new Date().toLocaleDateString();
  public horarios: Horarios[] = []
  public dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  public mes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12];
  public anio = new Date().getFullYear();
  public hora = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM"]
  public formHorario: FormGroup = this.fb.group({
    dia: ['01', [Validators.required]],
    mes: ['01', [Validators.required]],
    anio: [this.anio, [Validators.required]],
    horarios: ['09:00 AM', [Validators.required]]
  });
  ngOnInit(): void {
    this.adminService.getHorarios().subscribe(data => {
      this.horarios = data;
      console.log(this.horarios);
    });

  }
  changeValueIsCreated() {
    this.isCreated = !this.isCreated;
  }
  saveHorarios() {
    if(this.formHorario.invalid) return alert("LLena los campos")

    const date:Date = new Date(`${this.formHorario.controls['anio'].value}-${this.formHorario.controls['mes'].value}-${this.formHorario.controls['dia'].value}`)

    const newDataFromBack = {
      fecha:date,
      horarios:this.formHorario.controls['horarios'].value
    }
    this.adminService.saveHorario(newDataFromBack).subscribe(data => {
      this.isCreated = false;
      if (data.status === 200) {
        this.formHorario.reset();
        alert("Creado exitosamente")
        this.adminService.getHorarios().subscribe(data => {
          this.horarios = data;
        });
      }
      else if(data.status === 409){
        alert("Fecha y hora ya han sido registradas")
      }
    });
  }
  deleteHorario(id: number) {
    this.adminService.deleteHorario(id).subscribe(data => {
      if (data.status === 200) {
        alert("Eliminado exitosamente")
        this.adminService.getHorarios().subscribe(data => {
          this.horarios = data;
        });
      }
    });
  }
}
