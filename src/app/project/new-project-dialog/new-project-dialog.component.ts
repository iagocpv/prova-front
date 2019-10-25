import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, startWith, map } from 'rxjs/operators';

import { Project } from 'src/app/project/Project';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user/user.service';
import { CompanyService } from 'src/app/company/company.service';
import { Company } from 'src/app/company/Company';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.css']
})
export class NewProjectDialogComponent implements OnInit {

  form: FormGroup;
  private: boolean;
  clientDropdown: boolean;
  users: User[];
  companies: Company[];
  filteredCompanies$: Observable<Company[]>;

  constructor(
    public dialogRef: MatDialogRef<NewProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private fb: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getCompanies();

    this.private = true;
    this.clientDropdown = false;

    this.form = this.fb.group({
      name: [null, Validators.required ],
      companyName: [null, [Validators.required ]],
      totalHours: [null, Validators.required ],
      end: [null, Validators.required],
      users: [null]
    });

    this.filteredCompanies$ = this.form.get('companyName').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }

  togglePrivate(value: boolean) {
    this.private = value;
  }

  toggleClient() {
    this.clientDropdown = !this.clientDropdown;
  }

  getUsers() {
    this.userService.findAll()
    .pipe(first())
    .subscribe( users => {
      this.users = users;
    });
  }

  getCompanies() {
    this.companyService.findAll()
    .pipe(first())
    .subscribe( companies => {
      companies.sort((a, b) => (a.name > b.name) ? 1 : -1 );
      this.companies = companies;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  private _filter(value: string): Company[] {
    const filterValue = value.toLowerCase();

    return this.companies.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
