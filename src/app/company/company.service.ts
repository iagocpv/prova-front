import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Company } from './Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

}
