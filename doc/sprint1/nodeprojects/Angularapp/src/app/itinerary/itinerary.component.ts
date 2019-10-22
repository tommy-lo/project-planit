import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  itinerary = [];

  constructor( private dataService: DataService ) { }

  itinerary$

  ngOnInit() {  }

  getItinerary() {
    this.itinerary$ = this.dataService.sendGetItinerary();
  }

}
