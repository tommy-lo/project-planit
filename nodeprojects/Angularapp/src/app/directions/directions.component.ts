import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  public slat: any = 43.6532
  public slng: any = -79.3832

  public elat: any = 45.4215
  public elng: any = -75.6972
  
  public dir = undefined
  public origin: any
  public destination: any

  public listOfTravel = ['DRIVING', 'TRANSIT', 'WALKING', 'BICYCLING']
  public travelMode: any

  public dMatrix = new google.maps.DistanceMatrixService();
  public duration: any
  public distance
  public ori = new google.maps.LatLng(this.slat, this.slng)
  public dest = new google.maps.LatLng(this.elat, this.elng)
  
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    //this.getDirection()

    this.setTravelMode('DRIVING'); //Default
    //this.setTravelModeTransit();
  }
  
  getDirection() {
    this.slat = parseFloat(this.route.snapshot.paramMap.get('Olatitude'))
    this.slng = parseFloat(this.route.snapshot.paramMap.get('Olongitude'))
    this.elat = parseFloat(this.route.snapshot.paramMap.get('latitude'))
    this.elng = parseFloat(this.route.snapshot.paramMap.get('longitude'))

    console.log(this.slat)
    console.log(this.slng)
    console.log(this.elat)
    console.log(this.elng)
    this.dir = {
      origin: { lat: this.slat, lng: this.slng },
      destination: { lat: this.elat, lng: this.elng }
    }
    console.log(this.dir)

    this.ori = new google.maps.LatLng(this.slat, this.slng)
    this.dest = new google.maps.LatLng(this.elat, this.elng)
    console.log(this.ori)
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

  public setStartLatLng(lat:Number, lng:Number){
    this.slat = lat;
    this.slng = lng;
  }

  public setEndLatLng(lat:Number, lng:Number){
    this.elat = lat;
    this.elng = lng;
  }

  public setPanel(){
    return document.querySelector('#myPanel');
  }
  
  public setTravelMode(tMode:string){
    this.travelMode = tMode;
  }

}
