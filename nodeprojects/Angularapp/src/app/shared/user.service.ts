import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.=model';
import { PFilters } from './pfilters.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newuser: User;
  user: User;
  pfilters: PFilters;

  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  addUser(user: User){
    return this.http.post(this.baseURL + '/addUser', user);
  }

  getUser(user:User) {
    return this.http.post(this.baseURL + '/getUser', user);
  }

  updateUser(user:User){
    return this.http.put(this.baseURL + '/updateUser', user);
  }

  updateUserPreferences(user: User, pfilters: PFilters){
    user.preferences = pfilters.preferences;
    user.meals = pfilters.meals;
    this.updateUser(user);
  }
}
