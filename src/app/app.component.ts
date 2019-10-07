import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.user$ = this.loginService.getUser();
  }

}
