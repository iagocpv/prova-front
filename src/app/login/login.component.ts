import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  keepSigned = false;
  name: String;
  password: String;

  admin: User = {name: 'José Severino', role: 'admin', jobRole: 'Dashboard Admin'};
  user: User = {name: 'Adam Henrique', role: 'user', jobRole: 'Analista de Sistemas'};

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  toggleKeepSigned() {
    this.keepSigned = ! this.keepSigned;
  }

  onSubmit(loginForm) {
    if (loginForm.value.name === 'admin') {
      this.loginService.login(this.admin);
      this.router.navigate(['dashboard']);
    } else {
      this.loginService.login(this.user);
      this.router.navigate(['dashboard']);
    }
  }
}
