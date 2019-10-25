import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = environment.api;

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  findProject(projectId: any) {
    return this.http.get<Project>(`${this.apiUrl}/projects/${projectId}`);
  }

}
