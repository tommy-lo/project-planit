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

  public listOfTravel = ['DRIVING', 'TRANSIT', 'WALKING', 'BICYCLING']
  public travelMode: any

  public dMatrix = new google.maps.DistanceMatrixService();
  public duration: any
  public distance
  public ori = new google.maps.LatLng(43.6532, -79.3832)
  public dest = new google.maps.LatLng(45.4215, -75.6972)
  
  ngOnInit() {
    //this.getDirection()
    this.setTravelMode('DRIVING'); //Default
    //this.setTravelModeTransit();
  }
  
  getDirection() {
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: 45.4215, lng: -75.6972 }
    console.log(this.origin)

    this.dMatrix.getDistanceMatrix({origins: [this.ori], destinations:[this.dest], travelMode: this.travelMode}, this.callback);
  }

  private callback(response, status){
    if (status == 'OK'){
      var results = response.rows[0].elements;
      this.duration = results[0].duration.text;
      this.distance = results[0].distance.text;
      console.log(this.duration)
      console.log(this.distance)
    }else{
      this.duration = 0;
      this.distance = 0;
    }
  }

  public onSubmit(value:any){
    console.log(value)
    this.setTravelMode(value.travelMode)
    console.log(this.travelMode)
    this.getDirection()
  }

  public setPanel(){
    return document.querySelector('#myPanel');
  }
  
  public setTravelMode(tMode:string){
    this.travelMode = tMode;
  }

}
