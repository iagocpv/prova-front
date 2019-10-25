import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }


}
