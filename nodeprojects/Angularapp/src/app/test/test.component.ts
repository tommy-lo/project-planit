import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../shared/user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-iten-b',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [UserService]
})
export class TestComponent implements OnInit {
  public showContent = false;
  date = '';
  title = 'l';
  titleone = 't';
  onetype = 't';
  latone = 'NoValue';
  lngone = 'NoValue';
  titletwo = 'l';
  titlethree = 'l';
  titlefour = 'l';
  titlefive = 'l';
  longitude: any;
  latitude: any;
  zoom: number;
  request: any;
  result: any;
  map: google.maps.Map;
  location: any;
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
  query = "";
  querylist = [];
  saveitin: any;
  update: any;
  temp: any;
  username: any;
  usertemp: any;
  data: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {


    this.query = "";
    this.location = this.activatedRoute.snapshot.paramMap.get('distance');
    this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
    this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');
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

    this.result = this.initialize();
  }

  ngOnInit(){
    console.log(this.parks);
    console.log(this.movies);
    console.log(this.restaurants);
  }

directsecond() {
  this.router.navigate(['directions', this.longitude, this.latitude, this.lngone, this.latone]);
  console.log(this.titleone);
}

private initialize() {
    let k:any;
    if(this.restaurants == "true"){this.query = this.query + "restaurant| "}
    if(this.parks == "true"){this.query = this.query + "park| "}
    if(this.movies == "true"){this.query = this.query + "cinema| "}
    if(this.museums == "true"){this.query = this.query + "museum| "}
    if(this.shop == "true"){this.query = this.query + "shopping mall| "}
    if(this.zoo == "true"){this.query = this.query + "zoo| "}
    if(this.bar == "true"){this.query = this.query + "bar| "}
    if(this.sports == "true"){this.query = this.query + "sport| "}
    console.log(this.query);
    console.log(this.starttime);
    console.log(this.endtime);
    console.log(this.onetype);
    const sydney = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});
    this.request = {
        location: sydney,
        radius: this.location,
        query: this.query,
        minPriceLevel : 0
      };
    const service = new google.maps.places.PlacesService(this.map);
    service.textSearch(this.request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          k = results;
        }
        });
    setTimeout(() => this.titleone = k[0], 6000);
    setTimeout(() => this.latone = k[0].geometry.location.lat(), 6000);
    setTimeout(() => this.lngone = k[0].geometry.location.lng(), 6000);
    setTimeout(() => this.titletwo = k[1], 6000);
    setTimeout(() => this.titlethree = k[2], 6000);
    setTimeout(() => this.titlefour = k[3], 6000);
    setTimeout(() => this.titlefive = k[4], 6000);
    setTimeout(() => this.saveitin = k[0].name + " " + k[0].formatted_address +
    k[1].name + " " + k[1].formatted_address +
    k[2].name + " " + k[2].formatted_address +
    k[3].name + " " + k[3].formatted_address +
    k[4].name + " " + k[4].formatted_address 
    , 6000);
    }

    saveItinerary(form : NgForm){
      this.data = form.value["username"];
      console.log(form.value);  
      console.log(this.data);
    console.log(form.value);  
  if (this.data != undefined){
    this.temp = '"'+this.saveitin+'"';
    this.usertemp = '"'+this.data+'"';
    console.log(this.temp);
    console.log(this.usertemp);
    //this.usertemp = '"'+this.data+'"';
    this.update = '{"username": '+this.usertemp+', "display": '+this.temp+'}';
    var obj = JSON.parse(this.update);
    console.log(obj);
    this.userService.updateItin(obj).subscribe((res) => {
  });
  }
      console.log(this.saveitin);
      this.temp = '"'+this.saveitin+'"';
      this.usertemp = '"'+this.username+'"';
      console.log(this.temp);
      this.update = '{"username": '+this.usertemp+', "display": '+this.temp+'}';
      var obj = JSON.parse(this.update);
      console.log(obj);
      this.userService.updateItin(obj).subscribe((res) => {
    });
    }
}
