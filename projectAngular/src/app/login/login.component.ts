import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  rememberMe: boolean = false;
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  onLogin() {
    this.router.navigate(['/inside']);

  }
}
