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
  menu = true;


  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.user$ = this.loginService.getLoggedUser();
    this.user$.subscribe( user => {
      if (user) {
        document.getElementById('main').style.height = '100%';
      } else {
        document.getElementById('main').style.height = null;
      }
    });
  }

  toggleMenu(event) {
    if (event === 'clicked') {
      if (this.menu) {
        document.getElementById('menu').style.marginLeft = '-19.4%';
        document.getElementById('footer').style.width = '100%';
        this.menu = false;
      } else {
        document.getElementById('menu').style.marginLeft = '0%';
        document.getElementById('footer').style.width = '81.6%';
        this.menu = true;
      }
    }

    document.getElementById('footer').style.width = this.menu ? '81.6%' : '100%';
  }

}
