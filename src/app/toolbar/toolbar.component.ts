import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user$: Observable<User>;
  admin = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user$ = this.loginService.getUser();
    this.admin = this.loginService.isAdmin();
  }

}
