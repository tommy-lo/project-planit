import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.=model';
declare var M: any;

@Component({
  selector: 'app-pfilter',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [UserService]
})

export class PfiltersComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Need to get the current signed in user
    // Use a test user for now
    this.userService.user = {
      _id: "5dc472f6e71c901c7588db94",
      meals: [],
      preferences: [],
      history: [],
      password: 'd',
      name: 'c' };

    this.resetForm();
    this.refreshUserPFilters();
  }

  refreshUserPFilters() {
    console.log(this.userService.user);
    this.userService.user.preferences = [
      {place: 'parks', toggle: true},
      {place: 'restaurants', toggle: true},
      {place: 'museums', toggle: true},
      {place: 'movies', toggle: true}
    ];
    this.userService.user.meals = [
      {name: 'breakfast', time: 16},
      {name: 'lunch', time: 24},
      {name: 'dinner', time: 36}
    ];
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userService.updateUser(form.value);
  }


}
