import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class LoginService {

    user = new BehaviorSubject<User>(null);

    constructor() {}

    getUser() {
        return this.user.asObservable();
    }

    isAdmin() {
        return this.user.getValue().role === 'admin';
    }

    login(user: User) {
        this.user.next(user);
    }
}
