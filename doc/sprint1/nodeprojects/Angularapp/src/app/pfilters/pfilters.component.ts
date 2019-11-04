import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
//local import
import { PfiltersService } from '../shared/pfilters.service';
import { Pfilters } from '../shared/pfilters.model';

@Component({
  selector: 'app-distance',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [PfiltersService]
})
export class PfiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
