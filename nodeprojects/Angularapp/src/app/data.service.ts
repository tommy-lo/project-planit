import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {

  public travelModes = new BehaviorSubject(['NOT SET', 'NOT SET', 'NOT SET', 'NOT SET','NOT SET', 'NOT SET'])
  currentModes = this.travelModes.asObservable();
  public travelTimes = new BehaviorSubject(['NOT SET', 'NOT SET', 'NOT SET', 'NOT SET','NOT SET', 'NOT SET'])
  currentTimes = this.travelTimes.asObservable();

  constructor() { }

  public updateTravelModes(mode:any){
    this.travelModes.next(mode)
  }

  public updateTravelTimes(time:any){
    this.travelTimes.next(time)
  }

  public resetTravelModes(){
    this.travelModes.next(['NOT SET', 'NOT SET', 'NOT SET', 'NOT SET','NOT SET', 'NOT SET']);
  }

  public resetTravelTimes(){
    this.travelTimes.next(['NOT SET', 'NOT SET', 'NOT SET', 'NOT SET','NOT SET', 'NOT SET']);
  }

}