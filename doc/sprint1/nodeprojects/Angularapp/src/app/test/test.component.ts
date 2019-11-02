import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { TestService } from '../shared/test.service';
import { Test } from '../shared/test.model';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    providers: [TestService]
  })

  export class TestComponent implements OnInit {
    user: any;
    dis: any;
    start: any;
    end: any;
    budget: any;
    location: any;
    constructor(private testService: TestService, public aroute: ActivatedRoute) {

    }
    ngOnInit() { 
      // Below gets the filter from the part of the url which matches 
      // the path in the app.routing module
      this.dis = this.aroute.snapshot.paramMap.get('distance');
      this.user = this.aroute.snapshot.paramMap.get('user');
      this.start = this.aroute.snapshot.paramMap.get('start');
      this.end = this.aroute.snapshot.paramMap.get('end');
      this.budget = this.aroute.snapshot.paramMap.get('budget');
      this.location = this.aroute.snapshot.paramMap.get('location');
      // Displays info in console to see that it works
      console.log(this.user);
      console.log(this.dis);
      console.log(this.start);
      console.log(this.end);
      console.log(this.budget);
      console.log(this.location);
       

      }

  }