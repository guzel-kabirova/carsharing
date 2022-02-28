import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Location} from './steps.interface';

const NO_LOCATION: Location = {
  city: null,
  pointOfIssue: null
}

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private _stepsState = new BehaviorSubject([false, false, false, false]);
  public stepsState$ = this._stepsState.asObservable();

  private _location = new BehaviorSubject<Location>(NO_LOCATION);
  public location$ = this._location.asObservable();

  constructor() { }

  changeStepsState(i: number, isCompleted: boolean) {
    let newState = [...this.getStepsState()];
    newState[i] = isCompleted;
    this._stepsState.next(newState);
  }

  getStepsState(): boolean[] {
    return this._stepsState.getValue();
  }

  changeLocation(value: Location) {
    this._location.next(value);
    this.changeStepsState(0, this.isLocationFull());
  }

  isLocationFull(): boolean {
    const currentData = this.getLocation();
    return !!currentData.city && !!currentData.pointOfIssue;
  }

  getLocation(): Location {
    return this._location.getValue();
  }
}
