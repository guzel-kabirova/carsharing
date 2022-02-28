import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Location, StepsState} from './steps.interface';
import {NO_LOCATION, STEPS_STATE_INITIAL} from './steps.initial';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private _stepsState = new BehaviorSubject<StepsState>(STEPS_STATE_INITIAL);
  public stepsState$ = this._stepsState.asObservable();

  private _location = new BehaviorSubject<Location>(NO_LOCATION);

  constructor() { }

  changeStepsState(i: number, isCompleted: boolean) {
    let newState: StepsState = [...this.getStepsState()];
    newState[i] = isCompleted;
    this._stepsState.next(newState);
  }

  getStepsState(): StepsState {
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
