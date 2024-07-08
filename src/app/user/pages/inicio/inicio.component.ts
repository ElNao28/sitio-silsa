import { Component, OnInit } from '@angular/core';
import { TreeNotice } from '../../interfaces/TreeNotices.interface';
import { SilsaService } from '../../services/silsa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  constructor(private userService:SilsaService) { }
  public isLoading: boolean = true;
  public noticias:TreeNotice[] = [];
  ngOnInit(): void {
    this.userService.getTreeNotices().subscribe(data =>{
      this.noticias = data.data;
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
