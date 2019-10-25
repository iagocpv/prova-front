import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {

    apiUrl = environment.api;

    user$ = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) {}

    getLoggedUser() {
        return this.user$.asObservable();
    }

    findAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    isAdmin() {
        return this.user$.getValue().role === 'admin';
    }

    login(email: String) {

        this.findAll()
        .pipe(first())
        .subscribe( users => {
            users.forEach( user => {
                if (user.email === email) {
                    this.user$.next(user);
                }
            });

            if (this.user$.getValue() === null) {
                this.user$.next(users[Math.floor(Math.random() * users.length)]);
            }
        }, () => {
            alert('Falha no login');
        }
        );
    }

    logout() {
        this.user$.next(null);
    }
}
