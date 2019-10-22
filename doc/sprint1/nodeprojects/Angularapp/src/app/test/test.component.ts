import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { TestService } from '../shared/test.service';
import { Test } from '../shared/test.model';

@Component({
    selector: 'app-distance',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    providers: [TestService]
  })

  export class TestComponent implements OnInit {
    constructor(private testService: TestService) {}
    ngOnInit() {

      }

  }