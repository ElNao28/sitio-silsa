import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin/services/admin.service';
import { Datum } from '../../../admin/interfaces/DataNoticias.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-noticia',
  templateUrl: './view-noticia.component.html',
  styleUrl: './view-noticia.component.css'
})
export class ViewNoticiaComponent implements OnInit{

  constructor(
    private adminService:AdminService,
    private activateRouter:ActivatedRoute,
  ){}

  public dataNoticia:Datum = {
    id:0,
    titulo: '',
    contenido: '',
    img: '',
    autor: '',
    fecha: '',
    status: ''
  };
  public isLoading: boolean = true;

  ngOnInit(): void {
    let idNoticia = this.activateRouter.snapshot.paramMap.get('id');
    if(idNoticia!== null){
      this.adminService.getNoticiaById(parseInt(idNoticia)).subscribe(data => {
        this.dataNoticia = data.data;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
    }
  }

}
