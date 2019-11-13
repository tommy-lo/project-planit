import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]

})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
      this.userService.user = {
        _id:"",
        name:"",
        password:"",
        history:[""],
        preferences:[""]
      };
   }
  onSubmit(form : NgForm){
    // get user
    this.userService.getUser(form.value).subscribe((res) => {
      this.resetForm(form);
      let user = JSON.parse(JSON.stringify(res));
      let preferences = user[0].preferences;
      let history = user[0].history;

      // navigate to itinerary page
      if (user != "") {
        // add user history and preferences
        this.router.navigate(['/distances']);
      }
  });
  }
}
