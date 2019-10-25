import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  roleAdmin = true;

  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  toggleAdmin() {
    this.roleAdmin = !this.roleAdmin;
  }

}
