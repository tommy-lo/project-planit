import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
//local import
import { PfiltersService } from '../shared/pfilters.service';
import { Pfilters } from '../shared/pfilters.model';

@Component({
  selector: 'app-distance',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [PfiltersService]
})
export class PfiltersComponent implements OnInit {
  parks = true;
  museums = true;
  restaurants = true;
  movies = true;

  zoom: number;
  request: any;
  result: any;
  map: google.maps.Map;
  location: any;
  distance: any;
  longitude: any;
  latitude: any;
  budget: any;
  starttime: any;
  endtime: any;


  onToggleFilter(filter){
    // Update the user's database for the filter
    alert(filter);

  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
  this.location = this.activatedRoute.snapshot.paramMap.get('distance');
  this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
  this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');
  this.budget = this.activatedRoute.snapshot.paramMap.get('budget');
  this.starttime = this.activatedRoute.snapshot.paramMap.get('start');
  this.endtime = this.activatedRoute.snapshot.paramMap.get('end');
  console.count(this.longitude);

  }
  ngOnInit() {}

  test(){
    this.router.navigate(['test', this.location, this.longitude, this.latitude, this.budget, this.starttime, this.endtime])

  }
}
