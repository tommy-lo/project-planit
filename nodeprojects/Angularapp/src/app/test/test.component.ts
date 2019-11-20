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
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  onetype = 't';
  lat1 = 'NoValue';
  lng1 = 'NoValue';
  lat2 = 'NoValue';
  lng2 = 'NoValue';
  lat3 = 'NoValue';
  lng3 = 'NoValue';
  lat4 = 'NoValue';
  lng4 = 'NoValue';
  lat5 = 'NoValue';
  lng5 = 'NoValue';
  lat6 = 'NoValue';
  lng6 = 'NoValue';
  titleone = 'None';
  titletwo = 'None';
  titlethree = 'None';
  titlefour = 'None';
  titlefive = 'None';
  titlesix = 'None';
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

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {


    this.query = '';
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

  ngOnInit() {
    console.log(this.parks);
    console.log(this.movies);
    console.log(this.restaurants);
  }

direct1() {
  this.router.navigate(['directions', this.longitude, this.latitude, this.lng1, this.lat1]);
  console.log(this.titleone);
}
direct2() {
  this.router.navigate(['directions', this.lng1, this.lat1, this.lng2, this.lat2]);
  console.log(this.titleone);
}
direct3() {
  this.router.navigate(['directions', this.lng2, this.lat2, this.lng3, this.lat3]);
  console.log(this.titleone);
}
direct4() {
  this.router.navigate(['directions', this.lng3, this.lat3, this.lng4, this.lat4]);
  console.log(this.titleone);
}
direct5() {
  this.router.navigate(['directions', this.lng4, this.lat4, this.lng5, this.lat5]);
  console.log(this.titleone);
}
direct6() {
  this.router.navigate(['directions', this.lng5, this.lat5, this.lng6, this.lat6]);
  console.log(this.titleone);
}

settitle(k: any) {
  let load = 1;
  while (load < this.limit + 1) {
    if (load == 1) {
      this.titleone = k[1];
      this.lat1 = k[1].geometry.location.lat();
      this.lng1 = k[1].geometry.location.lng();
      this.show1 = true;
      this.savetouser = k[1].name;
    }
    if (load == 2) {
      this.titletwo  = k[2];
      this.lat2 = k[2].geometry.location.lat();
      this.lng2 = k[2].geometry.location.lng();
      this.show2 = true;
      this.savetouser = this.savetouser + "*" + k[2].name;
    }
    if (load == 3) {
      this.titlethree = k[3];
      this.lat3 = k[3].geometry.location.lat();
      this.lng3 = k[3].geometry.location.lng();
      this.show3 = true;
      this.savetouser = this.savetouser + "*" +k[3].name;
    }
    if (load == 4) {
      this.titlefour = k[4];
      this.lat4 = k[4].geometry.location.lat();
      this.lng4 = k[4].geometry.location.lng();
      this.show4 = true;
      this.savetouser = this.savetouser + "*" + k[4].name;
    }
    if (load == 5) {
      this.titlefive = k[5];
      this.lat5 = k[5].geometry.location.lat();
      this.lng5 = k[5].geometry.location.lng();
      this.show5 = true;
      this.savetouser = this.savetouser + "*" + k[5].name;
    }
    if (load == 6) {
      this.titlefive = k[6];
      this.lat6 = k[6].geometry.location.lat();
      this.lng6 = k[6].geometry.location.lng();
      this.show6 = true;
      this.savetouser = this.savetouser + "*" + k[6].name;
    }
    load = load + 1;
  }

}

private initialize() {
    let k: any;
    if (this.restaurants == 'true') {this.query = this.query + 'restaurant| '}
    if (this.parks == 'true') {this.query = this.query + 'park| '}
    if (this.movies == 'true') {this.query = this.query + 'cinema| '}
    if (this.museums == 'true') {this.query = this.query + 'museum| '}
    if (this.shop == 'true') {this.query = this.query + 'shopping mall| '}
    if (this.zoo == 'true') {this.query = this.query + 'zoo| '}
    if (this.bar == 'true') {this.query = this.query + 'bar| '}
    if (this.sports == 'true') {this.query = this.query + 'sport| '}
    this.limit = Math.abs((this.endtime - this.starttime) / 2);
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
