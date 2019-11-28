import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.=model';
declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm){
    // Uses the post request to add to the db.
    this.userService.addUser(form.value).subscribe((res) => {
      this.resetForm(form);
      let user = JSON.parse(JSON.stringify(res));
      console.log(user);
      if (user == null){
        M.toast({ html: 'Username taken, pick another', classes: 'rounded'});
      }
      else{
      // Indicates save
      M.toast({ html: 'Sign up sucess', classes: 'rounded'});
      }
  });

 }
 resetForm(form?: NgForm) {
  if (form){
    form.reset();
    this.userService.newuser = {
      _id:"",
      name:"",
      password:"",
      history:[""],
      preferences:[""],
      mode:"",
      display:""
    };
  }
 }

 goToPage(){
  //this.router.navigate([`${pageName}`]);
  this.router.navigateByUrl('http://localhost:4200/signup');
}
}
