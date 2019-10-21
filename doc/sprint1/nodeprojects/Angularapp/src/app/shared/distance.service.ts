import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

import { Distance } from './distance.=model';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  selectedDistance: Distance;
  distances: Distance[];
  readonly baseURL = 'http://localhost:3000/distances';
  constructor(private http: HttpClient) { }


  postDistance(dis: Distance){
    return this.http.post(this.baseURL, dis); 
  } 

  getDistanceList(){
    return this.http.get(this.baseURL);
  }
}
