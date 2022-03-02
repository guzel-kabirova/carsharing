import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {ILocation, TStepsState} from './steps.interface';
import {NO_LOCATION, STEPS_STATE_INITIAL} from './steps.initial';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private _stepsState = new BehaviorSubject<TStepsState>(STEPS_STATE_INITIAL);
  public stepsState$ = this._stepsState.asObservable();

  private _location = new BehaviorSubject<ILocation>(NO_LOCATION);

  constructor() { }

  changeStepsState(i: number, isCompleted: boolean) {
    let newState: TStepsState = [...this.getStepsState()];
    newState[i] = isCompleted;
    this._stepsState.next(newState);
  }

  getStepsState(): TStepsState {
    return this._stepsState.getValue();
  }

  changeLocation(value: ILocation) {
    this._location.next(value);
    this.changeStepsState(0, this.isLocationFull());
  }

  isLocationFull(): boolean {
    const currentData = this.getLocation();
    return !!currentData.city && !!currentData.pointOfIssue;
  }

  getLocation(): ILocation {
    return this._location.getValue();
  }
}
