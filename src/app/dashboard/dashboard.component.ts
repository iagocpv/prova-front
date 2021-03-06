import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';
import { User } from '../user';
import { Week } from '../week';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$: Observable<User>;
  filterOptions = ['Todos os registros no projeto', 'Todos os usuários'];
  filter = 'Todos os registros no projeto';
  breadcrumb = 'Dashboard';
  greetings = true;
  aux = [0, 1, 2, 3];


  week: Week[] =  [ {day: 'D', hours: 0}, { day: 'S', hours: 0}, {day: 'T', hours: 2}, {day: 'Q', hours: 3},
    {day: 'Q', hours: 5}, {day: 'S', hours: 1}, {day: 'S', hours: 0} ];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user$ = this.loginService.getLoggedUser();
  }

  disableGreetings() {
    this.greetings = false;
    this.breadcrumb = 'Resultado do filtro';
  }

  isAdmin() {
    return this.loginService.isAdmin();
  }

}
