import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NewProjectDialogComponent } from './project/new-project-dialog/new-project-dialog.component';
import { NewUserDialogComponent } from './user/new-user-dialog/new-user-dialog.component';
import { AppointmentDialogComponent } from './appointment/appointment-dialog/appointment-dialog.component';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { ProjectComponent } from './project/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidemenuComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    NewProjectDialogComponent,
    NewUserDialogComponent,
    AppointmentDialogComponent,
    ConfirmationDialogComponent,
    ProjectComponent,
  ],
  entryComponents: [
    NewProjectDialogComponent,
    NewUserDialogComponent,
    AppointmentDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
