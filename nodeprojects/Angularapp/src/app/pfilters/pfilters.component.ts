import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.=model';
import { Pfilters } from '../shared/pfilters.model';

@Component({
  selector: 'app-pfilter',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [UserService]
})
export class PfiltersComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }


  onSubmit(form: NgForm){
    this.userService.pfilters = form.value;
    alert(form.value);
    this.userService.updateUser(this.userService.user);
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.pfilters = {
          parks: true,
          museums: true,
          restaurants: true,
          movies: true,
          breakfast: 24,
          lunch: 24,
          dinner: 24
      };
    }
  }
}
