import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.=model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newuser: User;
  user: User;
  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post(this.baseURL + "/addUser", user);
  }
  
  getUser(user:User) {
    return this.http.post(this.baseURL + "/getUser", user);
  }
}
