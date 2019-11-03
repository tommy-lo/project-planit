import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  public lat: Number = 43.6532
  public lng: Number = -79.3832
  
  public origin: any
  public destination: any
  
  ngOnInit() {
    //this.getDirection()
  }
  
  getDirection() {
    this.origin = { lat: 43.6532, lng: -79.3832 }
    this.destination = { lat: 45.4215, lng: -75.6972 }
  }

  public setPanel(){
    return document.querySelector('#myPanel');
  }
}
