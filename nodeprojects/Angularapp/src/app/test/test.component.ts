import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../shared/user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


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

  userLat: any;
  userLng: any;
  placeLat = ['NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue'];
  placeLng = ['NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue', 'NoValue'];

  title = ['None', 'None', 'None', 'None', 'None', 'None'];
  zoom: number;
  request: any;
  result: any;
  map: google.maps.Map;
  distance: any;
  museums: any;
  restaurants: any;
  movies: any;
  parks: any;
  sports: any;
  zoo: any;
  bar: any;
  shop: any;
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
    this.userLng = this.activatedRoute.snapshot.paramMap.get('userLng');
    this.userLat = this.activatedRoute.snapshot.paramMap.get('userLat');


    this.distance = this.activatedRoute.snapshot.paramMap.get('distance');
    //this.userLng = this.activatedRoute.snapshot.paramMap.get('userLng');
    //this.userLat = this.activatedRoute.snapshot.paramMap.get('userLat');
    this.budget = this.activatedRoute.snapshot.paramMap.get('budget');
    this.starttime = this.activatedRoute.snapshot.paramMap.get('start');
    this.endtime = this.activatedRoute.snapshot.paramMap.get('end');

    this.museums = this.activatedRoute.snapshot.paramMap.get('museums');
    this.restaurants = this.activatedRoute.snapshot.paramMap.get('restaurants');
    this.movies = this.activatedRoute.snapshot.paramMap.get('movies');
    this.parks = this.activatedRoute.snapshot.paramMap.get('parks');
    this.shop = this.activatedRoute.snapshot.paramMap.get('shop');
    this.zoo = this.activatedRoute.snapshot.paramMap.get('zoo');
    this.bar = this.activatedRoute.snapshot.paramMap.get('bar');
    this.sports = this.activatedRoute.snapshot.paramMap.get('sports');

    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.history = this.activatedRoute.snapshot.paramMap.get('history');
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
    console.log(this.activatedRoute.snapshot.paramMap)

    this.result = this.initialize();

  }

  ngOnInit() {
    if (this.mode == "light"){
      this.toggle = false;
    }
    else{
      this.toggle = true;
    }

    this.dataS.currentModes.subscribe(tMode => this.cModes = tMode)
    this.dataS.currentTimes.subscribe(tTime => this.cTimes = tTime)
    console.log(this.parks);
    console.log(this.movies);
    console.log(this.restaurants);
  }

direct1() {
  console.log(this.userLng)
  console.log(this.userLat)
  this.router.navigate(['directions', this.distance, this.location, this.userLng, this.userLat, this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLng[0], this.placeLat[0], 0, this.mode, {history: [this.history]}])
  //this.router.navigate(['directions', this.userLng, this.userLat, this.placeLng[0], this.placeLat[0], this.mode]);
  console.log(this.title[0]);
}
direct2() {
  this.router.navigate(['directions', this.distance, this.location, this.placeLng[0], this.placeLat[0], this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLng[1], this.placeLat[1], 1, this.mode, {history: [this.history]}])
  console.log(this.title[0]);
}
direct3() {
  this.router.navigate(['directions', this.distance, this.location, this.placeLng[1], this.placeLat[1], this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLng[2], this.placeLat[2], 2, this.mode, {history: [this.history]}])
  console.log(this.title[0]);
}
direct4() {
  this.router.navigate(['directions', this.distance, this.location, this.placeLng[2], this.placeLat[2], this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLng[3], this.placeLat[3], 3, this.mode, {history: [this.history]}])
  console.log(this.title[0]);
}
direct5() {
  this.router.navigate(['directions', this.distance, this.location, this.placeLng[3], this.placeLat[3], this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLat[4], this.placeLat[4], 4, this.mode, {history: [this.history]}])
  console.log(this.title[0]);
}
direct6() {
  this.router.navigate(['directions', this.distance, this.location, this.placeLat[4], this.placeLat[4], this.budget, this.starttime,
  this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar,
  this.sports, this.username,  this.placeLng[5], this.placeLat[5], 5, this.mode, {history: [this.history]}])
  console.log(this.title[0]);
}

settitle(k: any) {
  let load = 1;
  while (load < this.limit + 1) {
    if (load == 1) {
      this.title[0] = k[1];
      this.placeLat[0] = k[1].geometry.location.lat();
      this.placeLng[0] = k[1].geometry.location.lng();
      this.show1 = true;
      this.savetouser = k[1].name;
    }
    if (load == 2) {
      this.title[1]  = k[2];
      this.placeLat[1] = k[2].geometry.location.lat();
      this.placeLng[1] = k[2].geometry.location.lng();
      this.show2 = true;
      this.savetouser = this.savetouser + "*" + k[2].name;
    }
    if (load == 3) {
      this.title[2] = k[3];
      this.placeLat[2] = k[3].geometry.location.lat();
      this.placeLng[2] = k[3].geometry.location.lng();
      this.show3 = true;
      this.savetouser = this.savetouser + "*" +k[3].name;
    }
    if (load == 4) {
      this.title[3] = k[4];
      this.placeLat[3] = k[4].geometry.location.lat();
      this.placeLng[3] = k[4].geometry.location.lng();
      this.show4 = true;
      this.savetouser = this.savetouser + "*" + k[4].name;
    }
    if (load == 5) {
      this.title[4] = k[5];
      this.placeLat[4] = k[5].geometry.location.lat();
      this.placeLat[4] = k[5].geometry.location.lng();
      this.show5 = true;
      this.savetouser = this.savetouser + "*" + k[5].name;
    }
    if (load == 6) {
      this.title[4] = k[6];
      this.placeLat[5] = k[6].geometry.location.lat();
      this.placeLng[5] = k[6].geometry.location.lng();
      this.show6 = true;
      this.savetouser = this.savetouser + "*" + k[6].name;
    }
    load = load + 1;
  }

}

private initialize() {
    let k: any;
    let geocoder = new google.maps.Geocoder();

    if (this.restaurants == 'true') {this.query = this.query + 'restaurant| '}
    if (this.parks == 'true') {this.query = this.query + 'park| '}
    if (this.movies == 'true') {this.query = this.query + 'cinema| '}
    if (this.museums == 'true') {this.query = this.query + 'museum| '}
    if (this.shop == 'true') {this.query = this.query + 'shopping mall| '}
    if (this.zoo == 'true') {this.query = this.query + 'zoo| '}
    if (this.bar == 'true') {this.query = this.query + 'bar| '}
    if (this.sports == 'true') {this.query = this.query + 'sport| '}
    this.limit = Math.abs((this.endtime - this.starttime) / 2);
    geocoder.geocode(
      {address: this.location},
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          this.userLng = results[0].geometry.location.lng();
          this.userLat = results[0].geometry.location.lat();
          console.log(this.userLng)
          console.log(this.userLat)
          this.city = new google.maps.LatLng(this.userLat, this.userLng);

          this.map = new google.maps.Map(
            document.getElementById('map'), {center: this.city, zoom: 15});
          this.request = {
            location: this.city,
            radius: this.distance,
            query: 'tourist',
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
      // Save for other username
      if (this.data != undefined) {
        // Format username to json format using the form info.
        this.usertemp = '"' + this.data + '"';
        // Format all to json format.
        this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
        // Create json.
        let obj = JSON.parse(this.update);
        // Update entered User
        this.userService.updateItin(obj).subscribe((res) => {
        });
      }
    }
}
