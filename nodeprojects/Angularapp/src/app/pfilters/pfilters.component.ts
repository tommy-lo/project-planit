import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.=model';
import { PFilters } from '../shared/pfilters.model';
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
    this.resetForm();
  }

  onSubmit(form: NgForm){
    this.userService.updateUserPreferences(this.userService.user, form.value);
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.preferences = {
        parks: true,
        restaurants: true,
        museums: true,
        movies: true
      }
    }
  }
}
