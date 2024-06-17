import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Datum } from '../../interfaces/DataNoticias.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-noticia',
  templateUrl: './edit-noticia.component.html',
  styleUrl: './edit-noticia.component.css'
})
export class EditNoticiaComponent implements OnInit {
  constructor(private adminService: AdminService, private fb: FormBuilder, private activateRouter: ActivatedRoute,private router:Router) { }
  public noticia: Datum = {
    id: 0,
    titulo: '',
    contenido: '',
    autor: '',
    fecha: '',
    img: '',
    status: ''
  };
  public formNoticia: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    contenido: ['', [Validators.required]],
    img: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    autor: ['', [Validators.required]]
  });
  public id:string = "";
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.adminService.getNoticiaById(parseInt(id)).subscribe(data => {
        this.noticia = data.data;
        this.formNoticia.patchValue({
          titulo: this.noticia.titulo,
          contenido: this.noticia.contenido,
          img: this.noticia.img,
          fecha: this.noticia.fecha,
          autor: this.noticia.autor
        })
      });
    }
  }
  updateNoticia(){
    if(this.formNoticia.invalid) return alert("LLena los campos")
    this.adminService.updateNoticia(this.id, this.formNoticia.value).subscribe(data => {
      if (data.status === 200) {
        alert("Actualizado exitosamente")
        this.router.navigate(['/admin/dashboard/noticias'])
      }
    });
  }
}
