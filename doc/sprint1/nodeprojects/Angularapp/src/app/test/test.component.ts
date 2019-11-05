import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iten-b',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public showContent = false;
  latitude: number;
  date = '';
  title = 'l';
  titleone = 'l';
  titletwo = 'l';
  titlethree = 'l';
  titlefour = 'l';
  titlefive = 'l';
  longitude: number;
  zoom: number;
  request: any;
  result: any;
  map: google.maps.Map;
  location: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.location = this.activatedRoute.snapshot.paramMap.get('distance');
    this.result = this.initialize();
  }

  ngOnInit() {}

// Get Current Location Coordinates
private initialize(): any {
    let k;
    const sydney = new google.maps.LatLng(-33.867, 151.195);
    this.map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});
    this.request = {
        location: sydney,
        radius: this.location,
        query: 'tourist',
        minPriceLevel : 0
      };
    const service = new google.maps.places.PlacesService(this.map);
    service.textSearch(this.request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          k = results;
        }
        });
    if (k[0].open > 5){
      //
    }
    setTimeout(() => this.titleone = k[0], 6000);
    setTimeout(() => this.titletwo = k[1], 6000);
    setTimeout(() => this.titlethree = k[2], 6000);
    setTimeout(() => this.titlefour = k[3], 6000);
    setTimeout(() => this.titlefive = k[4], 6000);

    }
}
