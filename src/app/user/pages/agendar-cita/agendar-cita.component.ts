import { Component, OnInit } from '@angular/core';
import { SilsaService } from '../../services/silsa.service';
import { GetCitas, Horario } from '../../interfaces/GetCitas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent implements OnInit {
  constructor(
    private silsaServices: SilsaService, // Servicio para obtener y enviar datos relacionados con citas
    private fb: FormBuilder, // Constructor para formularios reactivos
  ) { }

  // Arreglo que almacena los datos de las citas obtenidas
  public dataHorarios: GetCitas[] = [];

  // Arreglo que contiene los números del 1 al 31, representando los días del mes
  public dias: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  // Arreglo que almacenará los días disponibles para citas
  public diasDisponibles: number[] = [];

  // Arreglo que almacenará los horarios disponibles para una cita en un día específico
  public horarios: Horario[] = [];

  // Número que representa el horario seleccionado para la cita
  public selectHorario: number = 0;

  // FormGroup para el formulario de selección de horario
  public formHorario: FormGroup = this.fb.group({
    id: ['', Validators.required]
  });

  // FormGroup para el formulario de datos del cliente
  public formData: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    cellphone: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // Se suscribe al servicio para obtener los horarios disponibles
    this.silsaServices.getHorarios().subscribe(data => {
      this.dataHorarios = data;
      // Se llena el arreglo de días disponibles con los días obtenidos
      for (let i = 0; i < this.dataHorarios.length; i++) {
        this.diasDisponibles.push(this.dataHorarios[i].dia)
      }
    });
  }

  // Booleano que controla la visibilidad de ciertos elementos en la interfaz de usuario
  next: boolean = false;

  // Función que alterna el valor de 'next'
  changeForm() {
    this.next = !this.next;
  }

  // Función que comprueba si un día está disponible para citas
  dayFound(day: number) {
    for (let i = 0; i < this.diasDisponibles.length; i++) {
      if (day === this.diasDisponibles[i]) {
        return true;
      }
    }
    return false;
  }

  // Función que muestra los horarios disponibles para un día específico
  showHorario(day: number) {
    for (let i = 0; i < this.dataHorarios.length; i++) {
      if (day === this.dataHorarios[i].dia) {
        this.horarios = this.dataHorarios[i].horarios;
      }
    }
  }

  // Función que envía los datos del formulario de cita al servidor y espera recibir un código de confirmación
  sendDataAndGetCode() {
    this.silsaServices.sendCode({
      id: this.formHorario.value.id,
      name: this.formData.value.name,
      email: this.formData.value.email,
      cellphone: this.formData.value.cellphone,
      message: this.formData.value.message
    }).subscribe(data => {
      // Si la solicitud es exitosa, reinicia el formulario de datos del cliente, cambia el estado de 'next' y muestra una alerta
      if (data.status === 200) {
        this.formData.reset();
        this.next = !this.next;
        alert("Se ha enviado un código de confirmación a tu correo");
      }
      console.log(data);
    });
  }
}
