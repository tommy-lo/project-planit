import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

import { Test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
    selectedTest: Test;
    tests: Test[];
}