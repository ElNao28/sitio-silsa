import { Component, OnInit } from '@angular/core';
import { SilsaService } from '../../services/silsa.service';
import { Datum } from '../../../admin/interfaces/DataNoticias.interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{
  constructor(private userService:SilsaService) { }
  public noticias:Datum[]=[];
  public isLoading:boolean = true;
  ngOnInit(): void {
    this.userService.getNoticias().subscribe(data=>{
      this.noticias = data.data;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    })
  }
}
