import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

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
  public cModes: any
  public cTimes: any

  public dMatrix = new google.maps.DistanceMatrixService();
  public duration: any
  public distance: any
  public ori = new google.maps.LatLng(this.slat, this.slng)
  public dest = new google.maps.LatLng(this.elat, this.elng)
  
  constructor(private route: ActivatedRoute, private data:DataService){}

  ngOnInit() {
    //this.getDirection()
    this.data.currentModes.subscribe(tMode => this.cModes = tMode)
    this.data.currentTimes.subscribe(tTime => this.cTimes = tTime)
    this.setTravelMode('DRIVING', 0); //Default
  }
  
  getDirection() {
    this.slat = parseFloat(this.route.snapshot.paramMap.get('Olatitude'))
    this.slng = parseFloat(this.route.snapshot.paramMap.get('Olongitude'))
    this.elat = parseFloat(this.route.snapshot.paramMap.get('latitude'))
    this.elng = parseFloat(this.route.snapshot.paramMap.get('longitude'))

    this.dir = {
      origin: { lat: this.slat, lng: this.slng },
      destination: { lat: this.elat, lng: this.elng }
    }
    console.log(this.dir)

    this.ori = new google.maps.LatLng(this.slat, this.slng)
    this.dest = new google.maps.LatLng(this.elat, this.elng)
    console.log(this.ori)
    this.dMatrix.getDistanceMatrix({origins: [this.ori], destinations:[this.dest], travelMode: this.travelMode}, this.callback.bind(this));


  }

   callback(response){

      var results = response.rows[0].elements;
      this.duration = results[0].duration.text;
      this.distance = results[0].distance.text;
      console.log(this.duration)
      console.log(this.distance)

  }

  public onSubmit(value:any){
    console.log(value)
    this.setTravelMode(value.travelMode, 0)
    this.data.updateTravelModes(this.cModes)
    console.log(this.travelMode)
    this.getDirection()
    setTimeout(() => this.setTravelTime(this.duration, 0), 2000)
    setTimeout(() => this.data.updateTravelTimes(this.cTimes), 2000)
    setTimeout(() => console.log(this.cModes), 2000)
    setTimeout(() => console.log(this.cTimes), 2000)
  }


  public setPanel(){
    return document.querySelector('#myPanel');
  }
  
  public setTravelMode(t:string, index:any){
    this.travelMode = t;
    this.cModes[index] = t;
  }

  public setTravelTime(t:any, index:any){
    this.cTimes[index] = t;
  }

}
