import { Component } from '@angular/core';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {
  next:boolean = false;

  changeForm(){
    this.next =!this.next;
  }
}
