import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  keepSigned = false;
  name: String;
  password: String;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  toggleKeepSigned() {
    this.keepSigned = ! this.keepSigned;
  }

  onSubmit(loginForm) {
    this.loginService.login(loginForm.value.email);
  }
}
