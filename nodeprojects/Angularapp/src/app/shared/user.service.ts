import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.=model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newuser: User;
  user: User;
  mode: String;
  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post(this.baseURL + "/addUser", user);
  }
  
  getUser(user:User) {
    return this.http.post(this.baseURL + "/getUser", user);
  }
  
  updateUser(user:User){
    return this.http.put(this.baseURL + "/updateUser", user);
  }

  updateItin(user:User){
    return this.http.put(this.baseURL + "/updateItin", user);
  }
}
