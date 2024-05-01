import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SilsaService } from '../../services/silsa.service';

@Component({
  selector: 'app-confirmar-cita',
  templateUrl: './confirmar-cita.component.html',
  styleUrl: './confirmar-cita.component.css'
})
export class ConfirmarCitaComponent implements OnInit {
  constructor(
    private activateRouter:ActivatedRoute,
    private silsaService:SilsaService
  ){}
  public code:string = '';

  ngOnInit(): void {
    let codeId = this.activateRouter.snapshot.paramMap.get('id');
    if(codeId !== null){
      this.code = codeId;
      this.silsaService.confirmCode({code:this.code}).subscribe(data=>{
        if(data.status === 200){
          alert('Cita agendada exitosamente')
        }
        else if(data.status === 404){
          alert('Ruta no encotrada')
        }
      });
    }
  }
}
