import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  user$: Observable<User>;
  admin = false;
  register = true;
  projects = true;
  profile = true;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user$ = this.loginService.getLoggedUser();
    this.admin = this.loginService.isAdmin();
    if (this.admin) {
      document.getElementById('job-role').style.color = 'red';
    }
  }

  toggleRegister() {
    this.register = !this.register;
  }

  toggleProjects() {
    this.projects = !this.projects;
  }

  toggleProfile() {
    this.profile = !this.profile;
  }

  logout() {
    this.loginService.logout();
  }

}
