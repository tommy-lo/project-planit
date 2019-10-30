import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
//local import
import { DistanceService } from '../shared/distance.service';
import { Distance } from '../shared/distance.=model';


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

  constructor(private distanceService: DistanceService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshDistanceList();
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
  let NavigationExtras: NavigationExtras = {
     queryParams: {
      "firstname": "John",
      "lastname": "Lonn"
     }
  }
   //this.router.navigateByUrl('http://localhost:4200/test');
   this.router.navigate(["test"], NavigationExtras);
 }
  refreshDistanceList(){
    // Uses the get request to get all the info in db.
    this.distanceService.getDistanceList().subscribe((res) => {
      this.distanceService.distances = res as Distance[]; 
    });
  }
  
}
