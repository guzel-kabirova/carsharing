import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {ILocation, TStepsState} from '../steps.interface';
import {NO_EXTRA, NO_LOCATION, NO_MODEL, STEPS_STATE_INITIAL} from '../steps.initial';
import {CarModel} from '../step-model/step-model.interface';
import {IExtraFields} from '../step-extra/step-extra.interface';
import {unique} from '../../../shared/utility/unique';

@Injectable({
  providedIn: 'root',
})
export class StepsStateService {
  private _activeStep = new BehaviorSubject<number>(0);
  public activeStep$ = this._activeStep.asObservable();

  private _stepsState = new BehaviorSubject<TStepsState>(STEPS_STATE_INITIAL);
  public stepsState$ = this._stepsState.asObservable();

  private _location = new BehaviorSubject<ILocation>(NO_LOCATION);
  public location$ = this._location.asObservable();

  private _carModel = new BehaviorSubject<CarModel>(NO_MODEL);
  public carModel$ = this._carModel.asObservable();

  private _extraFields = new BehaviorSubject<IExtraFields>(NO_EXTRA);
  public extraFields$ = this._extraFields.asObservable();

  constructor() { }

  public changeActiveStep(i: number) {
    this._activeStep.next(i);
  }

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

  public changeCarModel(car: CarModel) {
    let newCar = car;
    if (car.colors) {
      newCar = {...car, colors: unique(car.colors)};
    }
    this._carModel.next(newCar);
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

  public getCarModel(): CarModel {
    return this._carModel.getValue();
  }

  public changeExtraField(value: IExtraFields) {
    this._extraFields.next(value);
    this.changeStepsState(2, this.isExtraFieldFull());
  }

  private isExtraFieldFull(): boolean {
    const extraFields = this.getExtraFields();
    return !!extraFields.color && !!extraFields.dateFrom && !!extraFields.dateTo && !!extraFields.tariff;
  }

  public getExtraFields(): IExtraFields {
    return this._extraFields.getValue();
  }
}
