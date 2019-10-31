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
    constructor(private testService: TestService, public aroute: ActivatedRoute) {

    }
    ngOnInit() { 
      let dataRev = this.aroute.snapshot.paramMap.get('name');
      console.log(dataRev);

      }

  }