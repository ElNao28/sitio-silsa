import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrar-citas',
  templateUrl: './administrar-citas.component.html',
  styleUrl: './administrar-citas.component.css'
})
export class AdministrarCitasComponent implements OnInit{
  fecha = new Date().toLocaleDateString();
  ngOnInit(): void {


  }


}
