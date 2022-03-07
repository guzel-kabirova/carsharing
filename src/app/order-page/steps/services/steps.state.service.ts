import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {ILocation, TStepsState} from '../steps.interface';
import {NO_LOCATION, NO_MODEL, STEPS_STATE_INITIAL} from '../steps.initial';
import {ICarModel} from '../step-model/step-model.interface';

@Injectable({
  providedIn: 'root',
})
export class StepsStateService {
  private _stepsState = new BehaviorSubject<TStepsState>(STEPS_STATE_INITIAL);
  public stepsState$ = this._stepsState.asObservable();

  private _location = new BehaviorSubject<ILocation>(NO_LOCATION);
  public location$ = this._location.asObservable();

  private _carModel = new BehaviorSubject<ICarModel>(NO_MODEL);
  public carModel$ = this._carModel.asObservable();

  constructor() { }

  private changeStepsState(i: number, isCompleted: boolean) {
    let newState: TStepsState = [...this.getStepsState()];
    newState[i] = isCompleted;
    this._stepsState.next(newState);
  }

  private getStepsState(): TStepsState {
    return this._stepsState.getValue();
  }

  public changeLocation(value: ILocation) {
    this._location.next(value);
    this.changeStepsState(0, this.isLocationFull());
  }

  public changeCarModel(car: ICarModel) {
    this._carModel.next(car);
    this.changeStepsState(1, this.isCarModelFull());
  }

  private isLocationFull(): boolean {
    const currentData = this.getLocation();
    return !!currentData.city && !!currentData.pointOfIssue;
  }

  private isCarModelFull(): boolean {
    const currentData = this.getCarModel();
    return !!currentData.id && !!currentData.name;
  }

  public getLocation(): ILocation {
    return this._location.getValue();
  }

  public getCarModel(): ICarModel {
    return this._carModel.getValue();
  }
}
