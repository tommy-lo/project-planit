import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
//local import
import { PfiltersService } from '../shared/pfilters.service';
import { Pfilters } from '../shared/pfilters.model';
import { runInThisContext } from 'vm';
import { DataService } from '../data.service';
declare var M: any;
@Component({
  selector: 'app-distance',
  templateUrl: './pfilters.component.html',
  styleUrls: ['./pfilters.component.css'],
  providers: [PfiltersService]
})
export class PfiltersComponent implements OnInit {
  directions: any;
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
  history: any;
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
  username: any;
  toggle: any;
  mode: any;

  cModes: any;
  cTimes: any;

  onToggleFilter(filter){
    // Update the user's database for the filter
    alert(filter);

  }



  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataS:DataService) {
  this.distance = this.activatedRoute.snapshot.paramMap.get('distance');

  this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
  this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');
  this.budget = this.activatedRoute.snapshot.paramMap.get('budget');
  this.starttime = this.activatedRoute.snapshot.paramMap.get('start');
  this.endtime = this.activatedRoute.snapshot.paramMap.get('end');
  this.username = this.activatedRoute.snapshot.paramMap.get('user');
  this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
  this.history = this.activatedRoute.snapshot.paramMap.get('history');
  this.location = this.activatedRoute.snapshot.paramMap.get('location');


  }
  ngOnInit() {
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
    if (this.mode == "light"){
      this.toggle = false;
    }
    else{
      this.toggle = true;
    }

    this.dataS.currentModes.subscribe(tMode => this.cModes = tMode);
    this.dataS.currentTimes.subscribe(tTime => this.cTimes = tTime);
    
  }
  onClickpark(){
    this.togglepark = !this.togglepark;
    this.statuspark = this.togglepark ? 'Enable' : 'Disable';
    if (this.parks){
        this.parks = false;
        M.toast({ html: 'Park toggled off', classes: 'rounded'});
    }
    else{
      this.parks = true;
      M.toast({ html: 'Park toggled on', classes: 'rounded'});
    }
  }
  onClickmuseum(){
    this.togglemus = !this.togglemus;
    this.statusmus = this.togglemus ? 'Enable' : 'Disable';
    if (this.museums){
      this.museums = false;
      M.toast({ html: 'Museum toggled off', classes: 'rounded'});
    }
    else{
      this.museums = true;
      M.toast({ html: 'Museum toggled on', classes: 'rounded'});
    }
  }
  onClickrestaurant(){
    this.toggleres = !this.toggleres;
    this.statusres = this.toggleres ? 'Enable' : 'Disable';
    if (this.restaurants){
        this.restaurants = false;
        M.toast({ html: 'Restaurant toggled off', classes: 'rounded'});
    }
    else{
      this.restaurants = true;
      M.toast({ html: 'Restaurant toggled on', classes: 'rounded'});
    }
  }
  onClickmovie(){
    this.togglemov = !this.togglemov;
    this.statusmov = this.togglemov ? 'Enable' : 'Disable';
    if (this.movies){
        this.movies = false;
        M.toast({ html: 'Movie toggled off', classes: 'rounded'});
    }
    else{
      this.movies = true;
      M.toast({ html: 'Movie toggled on', classes: 'rounded'});
    }
  }

  onClickShop(){
    this.toggleshop = !this.toggleshop;
    this.statusshop = this.toggleshop ? 'Enable' : 'Disable';
    if (this.shop){
        this.shop = false;
        M.toast({ html: 'Shopping toggled off', classes: 'rounded'});
    }
    else{
      this.shop = true;
      M.toast({ html: 'Shopping toggled on', classes: 'rounded'});
    }
  }

  onClickBar(){
    this.togglebar = !this.togglebar;
    this.statusbar = this.togglebar ? 'Enable' : 'Disable';
    if (this.bar){
        this.bar = false;
        M.toast({ html: 'Bar toggled off', classes: 'rounded'});
    }
    else{
      this.bar = true;
      M.toast({ html: 'Bar toggled on', classes: 'rounded'});
    }
  }

  onClickZoo(){
    this.togglezoo = !this.togglezoo;
    this.statuszoo = this.togglezoo ? 'Enable' : 'Disable';
    if (this.zoo){
        this.zoo = false;
        M.toast({ html: 'Zoo toggled off', classes: 'rounded'});
    }
    else{
      this.zoo = true;
      M.toast({ html: 'Zoo toggled on', classes: 'rounded'});
    }
  }

  onClickSports(){
    this.togglesports = !this.togglesports;
    this.statussports = this.togglesports ? 'Enable' : 'Disable';
    if (this.sports){
        this.sports = false;
        M.toast({ html: 'Sports toggled off', classes: 'rounded'});
    }
    else{
      this.sports = true;
      M.toast({ html: 'Sports toggled on', classes: 'rounded'});
    }
  }

  gotoitinerary(){
    // Make default enabled as bar
    if (!(this.sports && this.restaurants && this.shop && this.zoo && this.bar && this.movies && this.museums && this.parks)){
      console.log(!(this.sports && this.restaurants && this.shop && this.zoo && this.bar && this.movies && this.museums && this.parks))
      this.bar = true;
    }

    this.dataS.resetTravelModes()
    this.dataS.resetTravelTimes()
    this.router.navigate(['itinerary', this.distance, this.location, this.longitude, this.latitude, this.budget, this.starttime, 
    this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar, 
    this.sports, this.username, this.mode, {history: [this.history]}])

  }
}
