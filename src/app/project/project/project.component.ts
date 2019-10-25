import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

import { CompanyService } from 'src/app/company/company.service';
import { ProjectService } from '../project.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user';
import { Company } from 'src/app/company/Company';
import { Project } from '../Project';
import { LoginService } from 'src/app/login/login.service';
import { AppointmentDialogComponent } from 'src/app/appointment/appointment-dialog/appointment-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ProjectDetails } from '../ProjectDetails';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() i;

  users: User[];
  companies: Company[];
  project: Project;
  details = false;
  @Input() filter;

  projectDetails: ProjectDetails[] = [
    {obs: 'Criação de componentes de login', date: '01/06/2019', hours: '6h'},
    {obs: 'Instalando e configurando ambiente de projeto', date: '03/06/2019', hours: '2h'}
  ];

  constructor(
    private loginService: LoginService,
    private companyService: CompanyService,
    private projectService: ProjectService,
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getProjects();
    this.getCompanies();
    this.getUsers();
  }

  getProjects() {
    this.projectService.getAll()
    .pipe(first())
    .subscribe( projects => {
      this.project = projects[this.i];
    });
  }

  getCompanies() {
    this.companyService.findAll()
    .pipe(first())
    .subscribe( companies => {
      this.companies = companies;
    });
  }

  getUsers() {
    this.userService.findAll()
    .pipe(first())
    .subscribe( users => {
      this.users = users;
    });
  }

  showDetails() {
    this.details = !this.details;
  }


  isAdmin() {
    return this.loginService.isAdmin();
  }

  currentPercentage(current, total) {
    const percentage = (current / total) * 100;

    if (percentage >= 0 && percentage <= 100 ) {
      return  `${percentage}%`;
    } else {
      return '100%';
    }
  }

  completed(current, total) {
    if (this.currentPercentage(current, total) !== '100%') {
      return 'red';
    } else {
      return 'rgb(12, 211, 62)';
    }
  }

  remainingHours(total, current) {
    const remaining = total - current;
    if (remaining >= 0) {
      return `${total - current}:00`;
    } else {
      return '00:00';
    }
  }

  newAppointment(company: string) {

    const appointmentDialog = this.dialog.open(AppointmentDialogComponent, {
      width: '450px',
      height: '350px',
      panelClass: 'custom-dialog-container',
      data: { company: company }
    });

    appointmentDialog.afterClosed()
    .pipe( first())
    .subscribe( value => {
      if (value) {
        const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {
          width: '450px',
          height: '350px',
          panelClass: 'custom-dialog-container',
          data: { company: company }
        });
      }
    });
  }

}
