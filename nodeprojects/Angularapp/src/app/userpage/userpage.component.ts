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
  update: any;
  tempuser: any;
  tempmode: any;
  array: any; 
  toggle: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.display = this.activatedRoute.snapshot.paramMap.get('display');
    this.history = this.activatedRoute.snapshot.paramMap.get('history');
    // The character that the stored itinerary is split by, the * is added when it is stored in the test page
    this.array = this.display.split("*");
 }

  ngOnInit() {
    if (this.mode == "dark")
    this.toggle = true;
    else{
      this.toggle = false;
    }
    this.tempuser = '"'+this.username+'"';
  }
  modeChange(){

    if (this.mode == "light"){
      M.toast({ html: 'Dark mode on', classes: 'rounded'});
      this.mode = "dark";
      this.toggle = true;
    }
    else{
      M.toast({ html: 'Light mode on', classes: 'rounded'});
      this.mode = "light";
      this.toggle = false;
      
    }
    this.tempmode = '"'+this.mode+'"';
    this.update = '{"username": '+this.tempuser+', "mode": '+this.tempmode+'}';
    var obj = JSON.parse(this.update);
    this.userService.updateMode(obj).subscribe((res) => {
  });
  }

  gotoDistance(){
    this.router.navigate(['distances', this.mode, this.username, {history: [this.history]}]);
  }
}
