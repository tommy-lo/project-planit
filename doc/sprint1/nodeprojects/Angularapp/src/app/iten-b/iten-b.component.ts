import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iten-b',
  templateUrl: './iten-b.component.html',
  styleUrls: ['./iten-b.component.css']
})
export class ItenBComponent implements OnInit {
  public showContent = false;
  latitude: number;
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

  constructor() {
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
        radius: '1000',
        query: 'tourist',
        minPriceLevel : 0
      };
    const service = new google.maps.places.PlacesService(this.map);
    service.textSearch(this.request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          k = results;
        }
        });
    setTimeout(() => this.titleone = k[0], 6000);
    setTimeout(() => this.titletwo = k[1], 6000);
    setTimeout(() => this.titlethree = k[2], 6000);
    setTimeout(() => this.titlefour = k[3], 6000);
    setTimeout(() => this.titlefive = k[4], 6000);

    }
}

