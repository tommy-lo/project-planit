import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
//local import
import { DistanceService } from '../shared/distance.service';
import { Distance } from '../shared/distance.=model';
import {  FormBuilder, FormGroup,  Validators } from '@angular/forms';


import { map } from 'rxjs/operators';
// for toast value which indicates save
declare var M: any;
@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css'],
  providers: [DistanceService]
})

export class DistanceComponent implements OnInit {
  name = "Angular";
  sform: FormGroup;
  user: any;
  dis: any;
  start: any;
  end: any;
  budget: any;
  location: any;
  constructor(
     private distanceService: DistanceService,
     private router: Router,
     private fb: FormBuilder) { 
      this.sform = fb.group({
        UserName: ['', Validators.required],
        Distance: ['', Validators.required],
        Start: ['', Validators.required],
        End: ['', Validators.required],
        Budget: ['', Validators.required],
        Location: ['', Validators.required]
      });
    }
  ngOnInit() {
    this.resetForm();
    this.refreshDistanceList();

  }
  form(){
   // Gets the value that is in the form based on it's name.
    this.dis = this.sform.controls['Distance'].value;
    this.start = this.sform.controls['Start'].value;
    this.end = this.sform.controls['End'].value;
    this.budget = this.sform.controls['Budget'].value;
    this.location = this.sform.controls['Location'].value;
    this.user = this.sform.controls['UserName'].value;
   // Displays the contents to the console
    console.log(this.dis);
    console.log(this.start)
    console.log(this.end)
    console.log(this.budget)
    console.log(this.location)
    console.log(this.user)
    // Navigates to a page called /test and then add url based on above
    // Eg. localhost:4200/test/John121/12/1100/2100/200/Toronto
    this.router.navigate(['test',this.user, this.dis, this.start, this.end, this.budget, this.location])

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.distanceService.selectedDistance = {
      _id: "",
      name: "",
      distance: null,
      start: null,
      end: null,
      budget: null,
      location: ""
    }
  }

  onSubmit(form : NgForm){
    // Uses the post request to add to the db.
    this.distanceService.postDistance(form.value).subscribe((res) => {
      this.resetForm(form);
      // Indicates save
      M.toast({ html: 'Saved success', classes: 'rounded'});
  });
  
 } 

 goToPage(){
   //this.router.navigate([`${pageName}`]);

   this.router.navigateByUrl('test/testing');
   //this.router.navigate(["test"]);
 }
  refreshDistanceList(){
    // Uses the get request to get all the info in db.
    this.distanceService.getDistanceList().subscribe((res) => {
      this.distanceService.distances = res as Distance[]; 
    });
  }
}
