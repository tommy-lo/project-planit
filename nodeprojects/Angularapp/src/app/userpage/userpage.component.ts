import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

declare var M: any;
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  providers: [UserService]
})
export class UserpageComponent implements OnInit {
  mode: any;
  history: any;
  display: any;
  username: any;
  preferences: any;
  modetoggle: any;
  modeset: number;
  update: any;
  tempuser: any;
  array: any;   

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.display = this.activatedRoute.snapshot.paramMap.get('display');
    this.array = this.display.split(",");
    console.log(this.array);

    
 }

  ngOnInit() {
    this.modeset = 0;
    this.modetoggle = false;
    this.tempuser = '"'+this.username+'"';
  }
  modeChange(){

    if (this.modeset == 0){
      M.toast({ html: 'Dark mode on', classes: 'rounded'});
      this.modeset = 1;
      this.modetoggle = true;
      this.mode = "dark";
    }
    else{
      M.toast({ html: 'Light mode on', classes: 'rounded'});
      this.modeset = 0;
      this.modetoggle = false;
      this.mode = "light"
      
    }
    this.update = '{"username": '+this.tempuser+', "password": "something"}';
    var obj = JSON.parse(this.update);
    console.log(obj);
    this.userService.updateUser(obj).subscribe((res) => {
  });
  }

  gotoDistance(){

    this.router.navigate(['distances', this.mode, this.username]);
  }
}
