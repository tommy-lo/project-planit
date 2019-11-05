import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:4200/assets/testjson/test1.json";

  constructor(private httpClient: HttpClient) { }

  public sendGetItinerary(): Observable<object>{
    return this.httpClient.get(this.REST_API_SERVER);
  }
}