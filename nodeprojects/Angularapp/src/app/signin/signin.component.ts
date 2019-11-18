import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]

})
export class SigninComponent implements OnInit {
mode: any;
history: any;
modetoggle: any;
modeset: number;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.modeset = 0;
    this.modetoggle = false;
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
        preferences:[""],
        mode:""
      };
   }
   modeChange(form : NgForm){

    if (this.modeset == 0){
      M.toast({ html: 'Dark mode on', classes: 'rounded'});
      this.modeset = 1;
    this.modetoggle = true;
    }
    else{
      M.toast({ html: 'Light mode on', classes: 'rounded'});
      this.modeset = 0;
      this.modetoggle = false;
      
    }
    console.log(form.value);

    this.userService.updateUser(form.value).subscribe((res) => {
  });
  }

  
  onSubmit(form : NgForm){
    // get user
    
    this.userService.getUser(form.value).subscribe((res) => {
      this.resetForm(form);
      let user = JSON.parse(JSON.stringify(res));
      let preferences = user[0].preferences;
      this.history = user[0].history;
      this.mode = user[0].mode;
      if (this.modetoggle == true){
        this.mode = "dark";
      }
      else{
        this.mode = "light";
      }
      // navigate to itinerary page
      if (user != "") {
        this.router.navigate(['distances', this.mode]);
        // add user history and preferences
       // this.router.navigate(['/distances']);

      }
  });
  }
}

