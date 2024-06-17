import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrl: './add-noticia.component.css'
})
export class AddNoticiaComponent {
  constructor(private adminService: AdminService, private fb: FormBuilder, private router: Router) { }
  public formNoticia: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    contenido: ['', [Validators.required]],
    img: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    autor: ['', [Validators.required]]
  });

  createNoticia() {
    const fecha = new Date().getFullYear();
    this.formNoticia.patchValue({
      fecha: fecha,
      autor: "carlitos perez"
    });
    if (this.formNoticia.invalid) return alert('Completa los campos')
    this.adminService.createNoticia(this.formNoticia.value).subscribe(data => {
      if(data.status === 200){
        alert('Noticia creada exitosamente')
        this.formNoticia.reset();
        this.router.navigate(['/admin/dashboard/noticias'])
      }
    });
  }
}
