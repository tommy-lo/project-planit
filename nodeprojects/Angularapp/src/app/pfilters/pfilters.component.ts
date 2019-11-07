import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../shared/user.service';
import { PFilters } from '../shared/pfilters.model';
declare var M: any;

@Component({
  selector: 'app-pfilter',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [UserService]
})

export class PfiltersComponent implements OnInit {
  preferences: object;
  meals: object;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.resetForm();
    this.refreshUserPFilters();
  }

  refreshUserPFilters(){
    this.preferences = {
      parks: true,
      restaurants: true,
      museums: true,
      movies: true
    };
    this.meals = {
      breakfast: 16,
      lunch: 24,
      dinner: 36
    };
  }


  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.pfilters = {
        _id: '',
        preferences: [],
        meals: []
      }
    }
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.userService.pfilters.preferences = Object.getOwnPropertyNames(this.preferences);
    this.userService.pfilters.meals = Object.keys(this.meals).map(Number);
    this.userService.updateUserPreferences(this.userService.user, this.userService.pfilters);
  }


}
