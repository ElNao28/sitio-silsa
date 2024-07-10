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
  genero:['',[Validators.required]],
  foto:['',[Validators.required]],
  email:['',[Validators.required]],
  password:['',[Validators.required]],
});


}
