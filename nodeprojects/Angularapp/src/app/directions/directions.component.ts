import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
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

  savetouser: any;
  mode: any;
  toggle: any;
  history: any;
  location: any;
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
  public distance1: any
  public ori = new google.maps.LatLng(this.slat, this.slng)
  public dest = new google.maps.LatLng(this.elat, this.elng)

  public index;
  
  constructor(private activatedRoute: ActivatedRoute, private data:DataService, private router: Router){
    this.query = '';
    //this.location = this.activatedRoute.snapshot.paramMap.get('distance');
    // this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
    // this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');


    this.distance = this.activatedRoute.snapshot.paramMap.get('distance');
    //this.longitude = this.activatedRoute.snapshot.paramMap.get('longitude');
    //this.latitude = this.activatedRoute.snapshot.paramMap.get('latitude');
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
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.history = this.activatedRoute.snapshot.paramMap.get('history');
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
  
    this.index = parseInt(this.activatedRoute.snapshot.paramMap.get('index'))
  }
  
  ngOnInit() {
    if (this.mode == "light"){
      this.toggle = false;
    }
    else{
      this.toggle = true;
    }
    //this.getDirection()
    this.data.currentModes.subscribe(tMode => this.cModes = tMode)
    this.data.currentTimes.subscribe(tTime => this.cTimes = tTime)

  }
  
  getDirection() {
    this.slat = parseFloat(this.activatedRoute.snapshot.paramMap.get('Olatitude'))
    this.slng = parseFloat(this.activatedRoute.snapshot.paramMap.get('Olongitude'))
    this.elat = parseFloat(this.activatedRoute.snapshot.paramMap.get('latitude'))
    this.elng = parseFloat(this.activatedRoute.snapshot.paramMap.get('longitude'))


    console.log(this.activatedRoute.snapshot.paramMap)

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
    this.dMatrix.getDistanceMatrix({origins: [this.ori], destinations:[this.dest], travelMode: this.travelMode}, this.callback.bind(this));


  }

   callback(response){

      var results = response.rows[0].elements;
      this.duration = results[0].duration.text;
      this.distance1 = results[0].distance.text;
      console.log(this.duration)
      console.log(this.distance1)

  }
  test(){
    console.log(this.distance);
    console.log(this.location);
    this.router.navigate(['itinerary', this.distance, this.location, this.slng, this.slat, this.budget, this.starttime, 
    this.endtime, this.parks, this.museums, this.restaurants, this.movies, this.shop, this.zoo, this.bar, 
    this.sports, this.username, this.mode, {history: [this.history]}])
    //{path: 'test/:distance/:location/:longitude/:latitude/:budget/:start/:end/:parks/:museums/:restaurants/:movies/:shop/:zoo/:bar/:sports/:user/:mode', component: TestComponent},

  }
  public onSubmit(value:any){
    console.log(value)
    console.log(this.index)
    this.setTravelMode(value.travelMode, this.index)
    this.data.updateTravelModes(this.cModes)
    console.log(this.travelMode)
    this.getDirection()

    setTimeout(() => this.setTravelTime(this.duration, this.index), 3000)
    setTimeout(() => this.data.updateTravelTimes(this.cTimes), 3000)
    setTimeout(() => console.log(this.cModes), 3000)
    setTimeout(() => console.log(this.cTimes), 3000)
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
