import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../shared/user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Place } from '../shared/place.model';
declare var M: any;

@Component({
  selector: 'app-iten-b',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [UserService]
})
export class TestComponent implements OnInit {
  public showContent = false;
  date = '';
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  onetype = 't';

  // placeLat[0] is latitude, placeLng[0] is longitude
  // placeLat[1] to placeLat[6] is latOne to latSix
  // placeLng[1] to placeLng[6] is lngOne to lngSix
  placeLat = ['NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue'];
  placeLng = ['NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue'];


  title = ['None', 'None', 'None', 'None', 'None', 'None'];
  zoom: number;
  request: any;
  result: any;
  map: google.maps.Map;
  distance: any;

  pfilters: any;

  budget: any;
  starttime: any;
  endtime: any;

  limit: any;
  query = '';
  querylist = [];
  saveitin: any;
  update: any;
  temp: any;
  username: any;
  usertemp: any;
  data: any;
  savetouser: any;
  mode: any;
  toggle: any;
  history: any;
  location: any;

  cModes: any;
  cTimes: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private dataS:DataService) {


    this.query = '';
    this.location = this.activatedRoute.snapshot.paramMap.get('distance');
    this.placeLng[0] = this.activatedRoute.snapshot.paramMap.get('longitude');
    this.placeLat[0] = this.activatedRoute.snapshot.paramMap.get('latitude');


    this.distance = this.activatedRoute.snapshot.paramMap.get('distance');
    this.budget = this.activatedRoute.snapshot.paramMap.get('budget');
    this.starttime = this.activatedRoute.snapshot.paramMap.get('start');
    this.endtime = this.activatedRoute.snapshot.paramMap.get('end');

    this.pfilters = {
      museum: this.activatedRoute.snapshot.paramMap.get('museums'),
      restaurant: this.activatedRoute.snapshot.paramMap.get('restaurants'),
      cinema: this.activatedRoute.snapshot.paramMap.get('movies'),
      parks: this.activatedRoute.snapshot.paramMap.get('parks'),
      shop: this.activatedRoute.snapshot.paramMap.get('shop'),
      zoo: this.activatedRoute.snapshot.paramMap.get('zoo'),
      bar: this.activatedRoute.snapshot.paramMap.get('bar'),
      sports: this.activatedRoute.snapshot.paramMap.get('sports')
    }

    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.history = this.activatedRoute.snapshot.paramMap.get('history');
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
    console.log(this.activatedRoute.snapshot.paramMap);

    this.result = this.initialize();
  }

  ngOnInit() {
    if (this.mode == "light"){
      this.toggle = false;
    }
    else{
      this.toggle = true;
    }

    this.dataS.currentModes.subscribe(tMode => this.cModes = tMode);
    this.dataS.currentTimes.subscribe(tTime => this.cTimes = tTime);
    console.log(this.pfilters.parks);
    console.log(this.pfilters.movies);
    console.log(this.pfilters.restaurants);
  }

// Navigate to directions from place1 to place2
direct(place1, place2){
  this.router.navigate(['directions', this.distance, this.location,
                        this.placeLng[place1], this.placeLat[place1],
                        this.budget, this.starttime, this.endtime,
                        this.pfilters.parks, this.pfilters.museum, this.pfilters.restaurant, this.pfilters.cinema,
                        this.pfilters.shop, this.pfilters.zoo, this.pfilters.bar, this.pfilters.sports,
                        this.username,
                        this.placeLng[place2], this.placeLat[place2], place1, this.mode, {history: [this.history]}]);
}

/**
direct1() {
  console.log(this.placeLng[0])
  console.log(this.placeLat[0])
  this.router.navigate(['directions', this.distance, this.location, this.placeLng[0], this.placeLat[0], this.budget, this.starttime,
  this.endtime, this.pfilters.parks, this.pfilters.museums, this.pfilters.restaurants, this.pfilters.movies, this.pfilters.shop, this.pfilters.zoo, this.pfilters.bar,
  this.pfilters.sports, this.username,  this.placeLng[1], this.placeLat[1], 0, this.mode, {history: [this.history]}])
  //this.router.navigate(['directions', this.placeLng[0], this.placeLat[0], this.placeLng[1], this.placeLat[1], this.mode]);
  console.log(this.title[0]);
}
*/

settitle(k: any) {
  let load = 1;
  while (load < this.limit + 1) {
    if (load == 1) {
      this.title[0] = k[1];
      this.placeLat[1] = k[1].geometry.location.lat();
      this.placeLng[1] = k[1].geometry.location.lng();
      this.show1 = true;
      this.savetouser = k[1].name;
    }
    if (load == 2) {
      this.title[1]  = k[2];
      this.placeLat[2] = k[2].geometry.location.lat();
      this.placeLng[2] = k[2].geometry.location.lng();
      this.show2 = true;
      this.savetouser = this.savetouser + "*" + k[2].name;
    }
    if (load == 3) {
      this.title[2] = k[3];
      this.placeLat[3] = k[3].geometry.location.lat();
      this.placeLng[3] = k[3].geometry.location.lng();
      this.show3 = true;
      this.savetouser = this.savetouser + "*" +k[3].name;
    }
    if (load == 4) {
      this.title[3] = k[4];
      this.placeLat[4] = k[4].geometry.location.lat();
      this.placeLng[4] = k[4].geometry.location.lng();
      this.show4 = true;
      this.savetouser = this.savetouser + "*" + k[4].name;
    }
    if (load == 5) {
      this.title[4] = k[5];
      this.placeLat[5] = k[5].geometry.location.lat();
      this.placeLat[5] = k[5].geometry.location.lng();
      this.show5 = true;
      this.savetouser = this.savetouser + "*" + k[5].name;
    }
    if (load == 6) {
      this.title[4] = k[6];
      this.placeLat[6] = k[6].geometry.location.lat();
      this.placeLng[6] = k[6].geometry.location.lng();
      this.show6 = true;
      this.savetouser = this.savetouser + "*" + k[6].name;
    }
    load = load + 1;
  }

}

private buildQuery(pfilters){
  // Build query string
  let filter: any;
  let query = '';
  for (filter of Object.keys(this.pfilters)){
    if (this.pfilters[filter] === 'true'){
      query += filter + '| ';
    }
    console.log(query)
  }
  return query;
}

private initialize() {
    let k: any;
    let geocoder = new google.maps.Geocoder();

    this.query = this.buildQuery(this.pfilters);

    this.limit = Math.abs((this.endtime - this.starttime) / 2);
    geocoder.geocode(
      {address: this.location},
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          this.placeLng[0] = results[0].geometry.location.lng();
          this.placeLat[0] = results[0].geometry.location.lat();
          console.log(this.placeLng[0])
          console.log(this.placeLat[0])
          this.city = new google.maps.LatLng(this.placeLat[0], this.placeLng[0]);

          this.map = new google.maps.Map(
            document.getElementById('map'), {center: this.city, zoom: 15});
          this.request = {
            location: this.city,
            radius: this.distance,
            query: this.query,
            minPriceLevel : 0
          };
          const service = new google.maps.places.PlacesService(this.map);
          service.textSearch(this.request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              k = results;
              console.log(k)
            }
            });
        }
      }.bind(this));
     setTimeout(() => k = k.filter(result =>
     !(this.history.split(",").includes(result.place_id)))
     ,5000);
    setTimeout(() => this.settitle(k), 6000);
    }


    
    saveItinerary(form: NgForm) {
      // Save for current user
      this.temp = '"' + this.savetouser + '"';
      // Format to json format
      this.usertemp = '"' + this.username + '"';
      // combine all to format
      this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
      // Create json
      let obj = JSON.parse(this.update);
      // Update the display parameter
      this.userService.updateItin(obj).subscribe((res) => {
      });


      this.data = form.value['username'];
      // check if form isn't undefined if not then save based on it
     if (this.data) {
        console.log("something")
        // Format username to json format using the form info.
        this.usertemp = '"' + this.data + '"';
        // Format all to json format.
        this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
        // Create json.
        let obj = JSON.parse(this.update);
        // Update entered User
        this.userService.updateItin(obj).subscribe((res) => {
          let user = JSON.parse(JSON.stringify(res));
          // Check if sent res is empty doc
          if (user.length == 0)
            M.toast({ html: 'Wrong entered username for second account, saving only to your account for now', classes: 'rounded'});      
          else 
            M.toast({ html: 'Saved Itinerary to both accounts', classes: 'rounded'});
        }
        
        );
      }
      else{
        M.toast({ html: 'Saved Itinerary to only your account', classes: 'rounded'});
      }
    }


    private storeHistory(places: string) {
      this.update = {
        username: this.username,
        history: places
      };
      this.userService.updateMode(this.update).subscribe(res => {});
    }
}
