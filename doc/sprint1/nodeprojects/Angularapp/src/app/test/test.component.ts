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
    firstname: string;
    lastname: string;
    test: "testing";
    constructor(private testService: TestService, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params =>{
        this.firstname = params["firstname"];
        this.lastname = params["lastname"];
      });
      console.log("blahhhhhhh");
      console.log(this.test);
    }
    ngOnInit() {

      }

  }