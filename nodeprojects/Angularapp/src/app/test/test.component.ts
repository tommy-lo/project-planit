import { Component, OnInit, Input } from "@angular/core";

import { UserService } from "../shared/user.service";

import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { DataService } from "../data.service";
import { Place } from '../shared/place.model';

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
      museums: this.activatedRoute.snapshot.paramMap.get("museums"),
      restaurants: this.activatedRoute.snapshot.paramMap.get("restaurants"),
      movies: this.activatedRoute.snapshot.paramMap.get("movies"),
      parks: this.activatedRoute.snapshot.paramMap.get("parks"),
      shop: this.activatedRoute.snapshot.paramMap.get("shop"),
      zoo: this.activatedRoute.snapshot.paramMap.get("zoo"),
      bar: this.activatedRoute.snapshot.paramMap.get("bar"),
      sports: this.activatedRoute.snapshot.paramMap.get("sports")
    };

    this.username = this.activatedRoute.snapshot.paramMap.get("user");
    this.mode = this.activatedRoute.snapshot.paramMap.get("mode");
    this.history = this.activatedRoute.snapshot.paramMap.get("history");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
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
  direct(place1: number, place2: number) {
    this.storeHistory(this.places[place2]._id);
    this.router.navigate([
      "directions",
      this.distance,
      this.location,
      this.places[place1].lng,
      this.places[place1].lat,
      this.budget,
      this.starttime,
      this.endtime,
      this.pfilters.parks,
      this.pfilters.museums,
      this.pfilters.restaurants,
      this.pfilters.movies,
      this.pfilters.shop,
      this.pfilters.zoo,
      this.pfilters.bar,
      this.pfilters.sports,
      this.username,
      this.places[place2].lng,
      this.places[place2].lat,
      place1,
      this.mode,
      { history: [this.history] }
    ]);
  }

  private settitle(place: Place) {
    const result = this.searches.shift();

    if (result !== undefined) {
      place.title = result.name;
      place.lat = result.geometry.location.lat();
      place.lng = result.geometry.location.lng();
      place.show = true;
      this.savetouser.push(result.name);
    }
    else {
      console.log('No more results to give');
    }
  }

  private buildQuery(pfilters) {
    // Build query string
    let filter: any;
    let query = "";
    for (filter of Object.keys(pfilters)) {
      if (this.pfilters[filter] === "true") {
        query += filter + "| ";
      }
    }
    return query;
  }

  private initialize() {
    // Build the string query
    this.query = this.buildQuery(this.pfilters);
    console.log(this.query);

    // Calculate the number of places we can have
    // At most 6
    this.limit = Math.min(6, Math.abs((this.endtime - this.starttime) / 2));

    // Generate the results
    this.generate();

    // Set the titles for items from the generated results
    let i: number;
    setTimeout(() => {
      for (i = 1; i <= this.limit; i++){
        this.settitle(this.places[i]);
      }
    }, 6000);
  }

  private generate() {
    let geocoder = new google.maps.Geocoder();

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
          query: "tourist",
          minPriceLevel: 0
        };
        const service = new google.maps.places.PlacesService(map);
        service.textSearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.searches = results;
          }
        });
      }
    });
    // Filter out results based on the history
    setTimeout(() => this.searches = this.searches.filter(result => !(this.history.split(',').includes(result.place_id))), 5000);
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
    this.userService.updateItin(obj).subscribe((res) => {});

    console.log(obj);


    this.data = form.value['username'];
    // Save for other username
    if (this.data != undefined) {
      // Format username to json format using the form info.
      this.usertemp = '"' + this.data + '"';
      // Format all to json format.
      this.update = '{"username": ' + this.usertemp + ', "display": ' + this.temp + '}';
      // Create json.
      let obj = JSON.parse(this.update);
      // Update entered User
      this.userService.updateItin(obj).subscribe((res) => {});
    }
  }

  private storeHistory(places: string) {
    this.update = {
      username: this.username,
      history: places
    };
    this.userService.updateUser(this.update).subscribe(res => {});
  }
}
