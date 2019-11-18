import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
//local import
import { PfiltersService } from '../shared/pfilters.service';
import { Pfilters } from '../shared/pfilters.model';
declare var M: any;
@Component({
  selector: 'app-distance',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [PfiltersService]
})
export class PfiltersComponent implements OnInit {
  parks = false;
  museums = false;
  restaurants = false;
  movies = false;
  sports = false;
  zoo = false;
  shop = false;
  bar = false;

  location: any;
  distance: any;
  longitude: any;
  latitude: any;
  budget: any;
  starttime: any;
  endtime: any;
  set1: number;
  set2: number;
  set3: number;
  set4: number;
  set5: number;
  set6: number;
  set7: number;
  set8: number;
  togglepark: boolean;
  togglemov: boolean;
  toggleres: boolean;
  togglemus: boolean;
  togglebar: boolean;
  togglesports: boolean;
  toggleshop: boolean;
  togglezoo: boolean;
  statuspark: any;
  statusmov: any;
  statusres: any;
  statusmus: any;
  statuszoo: any;
  statusbar: any;
  statusshop: any;
  statussports: any;

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


  }
  ngOnInit() {
    this.set1 = 0;
    this.set2 = 0;
    this.set3 = 0;
    this.set4 = 0;
    this.set5 = 0;
    this.set6 = 0;
    this.set7 = 0;
    this.set8 = 0;
    this.togglepark = true;
    this.toggleres = true;
    this.togglemov = true;
    this.togglemus = true;
    this.togglezoo = true;
    this.toggleshop = true;
    this.togglesports = true;
    this.togglebar = true;
    this.statuspark = 'Enable';
    this.statusres = 'Enable';
    this.statusmus = 'Enable';
    this.statusmov = 'Enable';
    this.statusbar = 'Enable';
    this.statuszoo = 'Enable';
    this.statussports = 'Enable';
    this.statusshop = 'Enable';
  }
  onClickpark(){
    this.togglepark = !this.togglepark;
    this.statuspark = this.togglepark ? 'Enable' : 'Disable';
    if (this.set1 == 0){
        this.parks = true;
        this.set1 = 1;

        M.toast({ html: 'Park toggled on', classes: 'rounded'});
    }
    else{
      this.parks = false;
      this.set1 = 0;
      M.toast({ html: 'Park toggled off', classes: 'rounded'});
    }
  }
  onClickmuseum(){
    this.togglemus = !this.togglemus;
    this.statusmus = this.togglemus ? 'Enable' : 'Disable';
    if (this.set2 == 0){
        this.museums = true;
        this.set2 = 1;
        M.toast({ html: 'Museum toggled on', classes: 'rounded'});
    }
    else{
      this.museums = false;
      this.set2 = 0;
      M.toast({ html: 'Museum toggled off', classes: 'rounded'});
    }
  }
  onClickrestaurant(){
    this.toggleres = !this.toggleres;
    this.statusres = this.toggleres ? 'Enable' : 'Disable';
    if (this.set3 == 0){
        this.restaurants = true;
        this.set3 = 1;
        M.toast({ html: 'Restaurant toggled on', classes: 'rounded'});
    }
    else{
      this.restaurants = false;
      this.set3 = 0;
      M.toast({ html: 'Restaurant toggled off', classes: 'rounded'});
    }
  }
  onClickmovie(){
    this.togglemov = !this.togglemov;
    this.statusmov = this.togglemov ? 'Enable' : 'Disable';
    if (this.set4 == 0){
        this.movies = true;
        this.set4 = 1;
        M.toast({ html: 'Movie toggled on', classes: 'rounded'});
    }
    else{
      this.movies = false;
      this.set4 = 0;
      M.toast({ html: 'Movie toggled off', classes: 'rounded'});
    }
  }
  onClickShop(){
    this.toggleshop = !this.toggleshop;
    this.statusshop = this.toggleshop ? 'Enable' : 'Disable';
    if (this.set5 == 0){
        this.shop = true;
        this.set5 = 1;
        M.toast({ html: 'Shopping toggled on', classes: 'rounded'});
    }
    else{
      this.shop = false;
      this.set5 = 0;
      M.toast({ html: 'Shopping toggled off', classes: 'rounded'});
    }
  }
  onClickBar(){
    this.togglebar = !this.togglebar;
    this.statusbar = this.togglebar ? 'Enable' : 'Disable';
    if (this.set6 == 0){
        this.bar = true;
        this.set6 = 1;
        M.toast({ html: 'Bar toggled on', classes: 'rounded'});
    }
    else{
      this.bar = false;
      this.set6 = 0;
      M.toast({ html: 'Bar toggled off', classes: 'rounded'});
    }
  }
  onClickZoo(){
    this.togglezoo = !this.togglezoo;
    this.statuszoo = this.togglezoo ? 'Enable' : 'Disable';
    if (this.set7 == 0){
        this.zoo = true;
        this.set7 = 1;
        M.toast({ html: 'Zoo toggled on', classes: 'rounded'});
    }
    else{
      this.zoo = false;
      this.set7 = 0;
      M.toast({ html: 'Zoo toggled off', classes: 'rounded'});
    }
  }
  onClickSports(){
    this.togglesports = !this.togglesports;
    this.statussports = this.togglesports ? 'Enable' : 'Disable';
    if (this.set8 == 0){
        this.sports = true;
        this.set8 = 1;
        M.toast({ html: 'Sports toggled on', classes: 'rounded'});
    }
    else{
      this.sports = false;
      this.set8 = 0;
      M.toast({ html: 'Sports toggled off', classes: 'rounded'});
    }
  }

  test(){
    this.router.navigate(['test', this.location, this.longitude, this.latitude, this.budget, this.starttime,
    this.endtime, this.parks, this.museums, this.restaurants, this.movies]);

  }
}
