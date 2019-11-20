import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
declare var M: any;
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]

})
export class SigninComponent implements OnInit {
mode: any;
history: any;
display: any;
username: any;
preferences: any;
modetoggle: any;
modeset: number;

  history:any;
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
        mode:"",
        display:""
      };
   }
  
  onSubmit(form : NgForm){
    // get user
    
    this.userService.getUser(form.value).subscribe((res) => {
      this.resetForm(form);
      let user = JSON.parse(JSON.stringify(res));

      //console.log(this.username);
      // navigate to itinerary page
      if (user != "" || user[0] != undefined || user == []) {
        this.username = user[0].name;
        this.display = user[0].display;
        this.preferences = user[0].preferences;
        this.history = user[0].history;

        this.mode = user[0].mode;
        //this.router.navigate(['distances', this.mode]);
        if (user != "")
        this.router.navigate(['userpage', this.username, this.display, this.mode, {history: [this.history]}]);
      }
  });
  }
}

