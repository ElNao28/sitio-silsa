import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../interfaces/GetListAdmins.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  constructor(private adminService:AdminService){}

  public listAdmin:Admin[] = [];

  ngOnInit(): void {
    this.getAdmins()
  }
  desactivatreAdmin(id:number){
    this.adminService.desactivateAdmin(id.toString()).subscribe(data =>{
      if(data.status){
        this.getAdmins()
        alert("Se Activo")
      }
    })
  }
  activatreAdmin(id:number){
    this.adminService.activateAdmin(id.toString()).subscribe(data =>{
      if(data.status){
        this.getAdmins()
        alert("Se Activo")
      }
    })
  }

  deleteAdmin(id:number){
    this.adminService.deleteAdmin(id.toString()).subscribe(data =>{
      if(data.status){
        alert("Se Elimino")
        this.getAdmins()
      }
    })
  }
  getAdmins(){
    this.adminService.getAdmins().subscribe(data =>{
      this.listAdmin = data.data;
    })
  }
}
