import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {ILocation, TStepsState} from '../steps.interface';
import {NO_EXTRA, NO_LOCATION, NO_MODEL, STEPS_STATE_INITIAL, ZERO_DURATION} from '../steps.initial';
import {CarModel} from '../step-model/step-model.interface';
import {IDuration, IExtraFields} from '../step-extra/step-extra.interface';
import {uniqArray} from '../../../shared/utility/uniq-array';
import {StepModelStoreService} from '../step-model/services/step-model.store.service';

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

  private _duration = new BehaviorSubject<IDuration>(ZERO_DURATION);
  public duration$ = this._duration.asObservable();

  constructor(private _modelStore: StepModelStoreService) { }

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
    this.resetCarModel();
    this.resetExtraField();
  }

  public changeCarModel(car: CarModel) {
    let newCar = car;
    if (car.colors) {
      newCar = {...car, colors: uniqArray(car.colors)};
    }
    this._carModel.next(newCar);
    this.changeStepsState(1, this.isCarModelFull());
    this.resetExtraField();
  }

  public changeExtraField(value: IExtraFields) {
    this._extraFields.next(value);
    this.changeStepsState(2, this.isExtraFieldFull());
  }

  public changeDuration(duration: IDuration) {
    this._duration.next(duration);
  }

  private isLocationFull(): boolean {
    const currentData = this.getLocation();
    return !!currentData.city && !!currentData.pointOfIssue;
  }

  private isCarModelFull(): boolean {
    const currentData = this.getCarModel();
    return !!currentData.id && !!currentData.name;
  }

  private isExtraFieldFull(): boolean {
    const extraFields = this.getExtraFields();
    return !!extraFields.color && !!extraFields.dateFrom && !!extraFields.dateTo && !!extraFields.tariff;
  }

  public getLocation(): ILocation {
    return this._location.getValue();
  }

  public getCarModel(): CarModel {
    return this._carModel.getValue();
  }

  public getExtraFields(): IExtraFields {
    return this._extraFields.getValue();
  }

  private resetCarModel() {
    this.changeCarModel(NO_MODEL);
    this._modelStore.changeActiveCar('');
  }

  private resetExtraField() {
    this.changeExtraField(NO_EXTRA);
  }
}
