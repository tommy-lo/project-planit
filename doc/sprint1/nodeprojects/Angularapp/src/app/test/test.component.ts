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
  location: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.location = this.activatedRoute.snapshot.paramMap.get('distance');
    this.latitude = this.activatedRoute.snapshot.paramMap.get('start');
    this.longitude = this.activatedRoute.snapshot.paramMap.get('end');
    this.result = this.initialize();
  }

  ngOnInit() {}

// Get Current Location Coordinates
private initialize() {
    let k:any;
    const sydney = new google.maps.LatLng(this.latitude, this.longitude);
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
    setTimeout(() => this.titleone = k[0], 6000);
    setTimeout(() => this.titletwo = k[1], 6000);
    setTimeout(() => this.titlethree = k[2], 6000);
    setTimeout(() => this.titlefour = k[3], 6000);
    setTimeout(() => this.titlefive = k[4], 6000);

    }
}
