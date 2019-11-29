import { Component, OnInit, Input } from "@angular/core";

import { UserService } from "../shared/user.service";

import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { DataService } from "../data.service";
import { Place } from '../shared/place.model';

declare var M: any;

@Component({
  selector: "app-iten-b",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
  providers: [UserService]
})
export class TestComponent implements OnInit {
  public showContent = false;
  date = "";
  onetype = "t";

  places = [new Place(), new Place(), new Place(), new Place(), new Place(), new Place(), new Place()];
  savetouser = [];

  query: string;
  limit: number;
  searches: any;

  zoom: number;
  distance: any;

  pfilters: any;

  budget: any;
  starttime: any;
  endtime: any;

  saveitin: any;
  update: any;
  temp: any;
  username: any;
  usertemp: any;
  data: any;
  mode: any;
  toggle: any;
  history: any;
  location: any;

  cModes: any;
  cTimes: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private router: Router, private dataS: DataService) {
    this.location = this.activatedRoute.snapshot.paramMap.get("distance");
    this.places[0].lng = parseInt(this.activatedRoute.snapshot.paramMap.get("longitude"));
    this.places[0].lat = parseInt(this.activatedRoute.snapshot.paramMap.get("latitude"));

    this.distance = this.activatedRoute.snapshot.paramMap.get("distance");
    this.budget = this.activatedRoute.snapshot.paramMap.get("budget");
    this.starttime = this.activatedRoute.snapshot.paramMap.get("start");
    this.endtime = this.activatedRoute.snapshot.paramMap.get("end");

    this.pfilters = {
      museum: this.activatedRoute.snapshot.paramMap.get('museums'),
      restaurant: this.activatedRoute.snapshot.paramMap.get('restaurants'),
      cinema: this.activatedRoute.snapshot.paramMap.get('movies'),
      parks: this.activatedRoute.snapshot.paramMap.get('parks'),
      shop: this.activatedRoute.snapshot.paramMap.get('shop'),
      zoo: this.activatedRoute.snapshot.paramMap.get('zoo'),
      bar: this.activatedRoute.snapshot.paramMap.get('bar'),
      sports: this.activatedRoute.snapshot.paramMap.get('sports')
    }

    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.mode = this.activatedRoute.snapshot.paramMap.get('mode');
    this.history = this.activatedRoute.snapshot.paramMap.get('history');
    this.location = this.activatedRoute.snapshot.paramMap.get('location');
    console.log(this.activatedRoute.snapshot.paramMap);

    // Generate results
    this.initialize();
  }

  ngOnInit() {
    if (this.mode == "light") {
      this.toggle = false;
    } else {
      this.toggle = true;
    }

    this.dataS.currentModes.subscribe(tMode => (this.cModes = tMode));
    this.dataS.currentTimes.subscribe(tTime => (this.cTimes = tTime));
  }

  // Navigate to directions from place1 to place2
  direct(place1: number, place2: number){
    this.storeHistory(this.username, this.places[place2]._id);
    this.router.navigate(['directions', this.distance, this.location,
                        this.places[place1].lng, this.places[place1].lat,
                        this.budget, this.starttime, this.endtime,
                        this.pfilters.parks, this.pfilters.museum, this.pfilters.restaurant, this.pfilters.cinema,
                        this.pfilters.shop, this.pfilters.zoo, this.pfilters.bar, this.pfilters.sports,
                        this.username,
                        this.places[place2].lng, this.places[place2].lat, place1, this.mode, {history: [this.history]}]);
  }

  private settitle(place: Place) {
    const result = this.searches.shift();

    if (result !== undefined) {
      place._id = result.place_id;
      place.title = result.name;
      place.lat = result.geometry.location.lat();
      place.lng = result.geometry.location.lng();
      place.show = true;
      this.savetouser.push(result.name);
    }
    else {
      // Generate new results
      console.log('No more results to give');
    }
  }

  private buildQuery(pfilters) {
    // Build query string
    let filter: any;
    let query = '';
    for (filter of Object.keys(pfilters)) {
      if (pfilters[filter] === 'true') {
        query += filter + '|';
      }
    }
    return query;
  }

  private async initialize() {

    // Build the string query
    this.query = this.buildQuery(this.pfilters);

    // Calculate the number of places we can have
    // At most 6
    this.limit = Math.min(6, Math.abs((this.endtime - this.starttime) / 2));

    // Get history from the user
    this.history = await this.getHistory(this.username);

    // Generate the results
    this.searches = await this.generate();

    // Filter results
    this.filterResults(this.searches);

    // Set the titles for items from the generated results
    let i: number;
    for (i = 1; i <= this.limit; i++) {
      this.settitle(this.places[i]);
    }
  }

  private generate() {
    let geocoder = new google.maps.Geocoder();

    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: this.location }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.places[0].lng = results[0].geometry.location.lng();
          this.places[0].lat = results[0].geometry.location.lat();
          let city = new google.maps.LatLng(this.places[0].lat, this.places[0].lng);

          let map = new google.maps.Map(document.getElementById("map"), {
            center: city,
            zoom: 15
          });
          let request = {
            location: city,
            radius: this.distance,
            query: this.query,
            minPriceLevel: 0
          };
          const service = new google.maps.places.PlacesService(map);
          service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(results);
            }
          });
        }
      });
    });
  }

  private filterResults(results) {
    // Filter out results based on the history
    return this.searches.filter(result => !(this.history.includes(result.place_id)));
  }


  saveItinerary(form: NgForm) {
    // Save for current user
    this.temp = '"' + this.savetouser + '"';
    // Format to json format
    this.usertemp = '"' + this.username + '"';
    // combine all to format
    this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
    // Create json
    let obj = JSON.parse(this.update);
    // Update the display parameter
    this.userService.updateItin(obj).subscribe((res) => {
    });


    this.data = form.value['username'];
    // check if form isn't undefined if not then save based on it
    if (this.data) {
      console.log('something');
      // Format username to json format using the form info.
      this.usertemp = '"' + this.data + '"';
      // Format all to json format.
      this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
      // Create json.
      let obj = JSON.parse(this.update);
      // Update entered User
      this.userService.updateItin(obj).subscribe((res) => {
        let user = JSON.parse(JSON.stringify(res));
        // Check if sent res is empty doc
        if (user.length == 0){
          M.toast({ html: 'Wrong entered username for second account, saving only to your account for now', classes: 'rounded'});
        }
        else {
          M.toast({ html: 'Saved Itinerary to both accounts', classes: 'rounded'});
        }
      });
    }
    else{
      M.toast({ html: 'Saved Itinerary to only your account', classes: 'rounded'});
    }
  }

  private storeHistory(username: string, placeID: string) {
    this.update = {
      name: username,
      history: placeID
    };
    this.userService.updateHistory(this.update).subscribe();
  }

  private getHistory(username: string) {
    this.update = {
      name: username
    };
    return new Promise((resolve,reject) => {
      this.userService.getHistory(this.update).subscribe(res => {
        resolve(res);
      });
    });
  }
}
