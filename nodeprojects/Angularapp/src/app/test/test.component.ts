import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iten-b',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public showContent = false;
  date = '';
  title = 'l';
  titleone = 't';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router){

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
    if(this.restaurants == "true"){this.query = this.query + "restaurant"}
    if(this.parks == "true"){this.query = this.query + " " + "park"}
    if(this.movies == "true"){this.query = this.query + " " + "movie_theater"}
    console.log(this.query);
    const sydney = new google.maps.LatLng(this.latitude, this.longitude);
    this.map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});
    this.request = {
        location: sydney,
        radius: this.location,
        type: [this.query],
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

    }
}
