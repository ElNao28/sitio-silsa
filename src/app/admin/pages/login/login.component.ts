import { Component } from '@angular/core';
import { environments } from '../../../../environments/environments'
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private adminService:AdminService, private router:Router, private fb:FormBuilder) { }
  public formLogin:FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });
  keyCapcha = environments.keyRecapcha

  login(){
    if(this.formLogin.valid){
      this.adminService.loginAdmin(this.formLogin.value).subscribe(data =>{
        if(data.status === 200){
          localStorage.setItem('token', data.data);
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('Datos incorrectos');
        }
      })
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
