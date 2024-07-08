import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private adminService:AdminService, private router:Router) { }
  showMenu = true;
  public name:string = '';
  public isSuperAdmin = false;

  ngOnInit(): void {
    const idUser = localStorage.getItem('token')
    console.log(idUser)
    if(idUser !== null){
      this.adminService.checkRol(idUser).subscribe(data=>{
        if(data.data.rol === 'admin'){
          this.isSuperAdmin = false;
          this.name = data.data.name;
        }
        else{
          this.isSuperAdmin = true;
          this.name = data.data.name;
        }
      });
    }
  }
  changeMenu(){
    this.showMenu =!this.showMenu;
  }
  closeSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/admin/login'])
  }
}
