import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iten-b',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public showContent = false;
  date = '';
  title = 'l';
  titleone = 'l';
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
  distance: any;
  museums: any;
  restaurants: any;
  movies: any;
  parks: any;
  budget: any;
  starttime: any;
  endtime: any;
  history: any;
  location: any;
  city: any;
  constructor(private activatedRoute: ActivatedRoute) {

    this.distance = this.activatedRoute.snapshot.paramMap.get('distance');
    //this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
    //this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');
    this.budget = this.activatedRoute.snapshot.paramMap.get('budget');
    this.starttime = this.activatedRoute.snapshot.paramMap.get('start');
    this.endtime = this.activatedRoute.snapshot.paramMap.get('end');
    this.museums = this,activatedRoute.snapshot.paramMap.get('museums');
    this.restaurants = this.activatedRoute.snapshot.paramMap.get('restaurants');
    this.movies = this.activatedRoute.snapshot.paramMap.get('movies');
    this.parks = this.activatedRoute.snapshot.paramMap.get('parks');
    this.history = this.activatedRoute.snapshot.paramMap.get('history').split(",");
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
    console.log(this.activatedRoute.snapshot.paramMap)

    this.result = this.initialize();

  }

  ngOnInit(){
    console.log(this.parks);
  } 

// Get Current Location Coordinates
private initialize() {
    let k:any;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {address: this.location},
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          this.longitude = results[0].geometry.location.lng();
          this.latitude = results[0].geometry.location.lat();
          console.log(this.longitude)
          console.log(this.latitude)
          this.city = new google.maps.LatLng(this.latitude, this.longitude);

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
      })
    //setTimeout(() => this.history = this.history.split(","), 3000)
    setTimeout(() => console.log(this.history), 4000)
    setTimeout(() => k = k.filter(result =>       
      !(this.history.includes(result.place_id)))
      ,5000);

    setTimeout(() => console.log(k), 6000)

    setTimeout(() => this.titleone = k[0], 6000);
    setTimeout(() => this.titletwo = k[1], 6000);
    setTimeout(() => this.titlethree = k[2], 6000);
    setTimeout(() => this.titlefour = k[3], 6000);
    setTimeout(() => this.titlefive = k[4], 6000);

    }
}
