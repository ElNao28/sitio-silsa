import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrl: './new-admin.component.css'
})
export class NewAdminComponent {
constructor(private adminService:AdminService, private router:Router, private fb:FormBuilder){}

public formAdmin:FormGroup = this.fb.group({
  nombre:['',[Validators.required]],
  apellido:['',[Validators.required]],
  apellidoM:['',[Validators.required]],
  telefono:['',[Validators.required]],
  genero:['M',[Validators.required]],
  //foto:['',[Validators.required]],
  email:['',[Validators.required]],
  password:['',[Validators.required]],
});

createAdmin(){
  if(this.formAdmin.invalid) return alert("Completa los campos")
  this.adminService.addNewAdmin(this.formAdmin.value).subscribe(data =>{
    if(data.status === 200){
      alert(data.message);
      this.router.navigate(['/admin/dashboard/add-user']);
    }
  })
}
}
