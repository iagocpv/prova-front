import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { LoginService } from '../login/login.service';
import { User } from '../user';
import { NewProjectDialogComponent } from '../project/new-project-dialog/new-project-dialog.component';
import { NewUserDialogComponent } from '../user/new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menu = new EventEmitter();

  user$: Observable<User>;
  admin = false;

  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  ngOnInit() {
    this.user$ = this.loginService.getLoggedUser();
    this.admin = this.loginService.isAdmin();
  }

  toggleMenu() {
    this.menu.emit('clicked');
  }

  newProject() {
    const projectDialog = this.dialog.open(NewProjectDialogComponent, {
      width: '440px',
      height: '530px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

  newUser() {
    const userDialog = this.dialog.open(NewUserDialogComponent, {
      width: '450px',
      height: '400px',
      panelClass: 'custom-dialog-container',
      data: {}
    });
  }

}
