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
   // this.user = this.sform.value;
    this.dis = this.sform.controls['Distance'].value;
   // console.log(this.user)
    console.log(this.dis)

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
