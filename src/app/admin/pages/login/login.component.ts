import { Component } from '@angular/core';
import { environments } from '../../../../environments/environments'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  keyCapcha = environments.keyRecapcha
}
