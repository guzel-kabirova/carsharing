import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ILocation, TStepsState} from '../steps.interface';
import {NO_EXTRA, NO_LOCATION, NO_MODEL, STEPS_STATE_INITIAL, ZERO_DURATION} from '../steps.initial';
import {CarModel} from '../step-model/step-model.interface';
import {IDuration, IExtraFields, IView} from '../step-extra/step-extra.interface';
import {uniqArray} from '../../../shared/utility/uniq-array';
import {StepModelStoreService} from '../step-model/services/step-model.store.service';
import {INameWithId, IOrderRequest} from '../../order-page.interface';
import {StepFinalStoreService} from '../step-final/services/step-final.store.service';
import {StepLocationStoreService} from '../step-location/services/step-location.store.service';
import {OrderStatus} from '../step-final/step-final.enum';
import {StepExtraStoreService} from '../step-extra/services/step-extra.store.service';
import {toUnix} from '../../../shared/utility/taiga-date-time-to-unix';

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

  private _price = new BehaviorSubject<number>(0);
  public price$ = this._price.asObservable();

  public view$: Observable<IView> = combineLatest([this.carModel$, this.extraFields$, this.duration$])
    .pipe(map(([carModel, extraFields, duration]) => ({carModel, extraFields, duration})));

  constructor(
    private _modelStore: StepModelStoreService,
    private _orderStatusesStore: StepFinalStoreService,
    private _locationStore: StepLocationStoreService,
    private _extraStore: StepExtraStoreService,
  ) { }

  public changeActiveStep(i: number) {
    this._activeStep.next(i);
  }

  private changeStepsState(i: number, isCompleted: boolean) {
    let newState: TStepsState = [...this.getStepsState()];
    newState[i] = isCompleted;
    this._stepsState.next(newState);
  }

  public setAllStepsToTrue() {
    this._stepsState.next([true, true, true, true, true]);
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
    this.changeStepsState(3, this.isEverythingFull());
  }

  public changeDuration(duration: IDuration) {
    this._duration.next(duration);
  }

  public changePrice(price: number) {
    this._price.next(price);
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
    return !!extraFields.color && !!extraFields.dateFrom[1] && !!extraFields.dateTo[1] && !!extraFields.tariff;
  }

  private isEverythingFull(): boolean {
    return this.getStepsState()[0] && this.getStepsState()[1] && this.getStepsState()[2];
  }

  public getOrderInfo(): IOrderRequest {
    return {
      orderStatusId: this.getOrderStatus(OrderStatus.New),
      ...this.getCityAndPoints(),
      carId: this.getCarWithId(),
      color: this.getExtraFields().color,
      dateFrom: toUnix(this.getExtraFields().dateFrom),
      dateTo: toUnix(this.getExtraFields().dateTo),
      rateId: this.getRate(),
      price: this.getPrice(),
      isFullTank: this.getExtraFields().fullTank,
      isNeedChildChair: this.getExtraFields().babyChair,
      isRightWheel: this.getExtraFields().rightHand,
    };
  }

  private getCityAndPoints(): { cityId: INameWithId, pointId: INameWithId } {
    const point = this.getLocation();
    const points = this._locationStore.getPoints();
    const index = points.map(point => point.address).indexOf(point.pointOfIssue ?? '');
    return {
      cityId: points[index].cityId,
      pointId: {
        id: points[index].id,
        name: points[index].address,
      },
    };
  }

  private getCarWithId(): INameWithId {
    const car = this.getCarModel();
    return {
      id: car.id,
      name: car.name,
    };
  }

  private getRate(): INameWithId {
    const tariffs = this._extraStore.getTariffs();
    const tariff = this.getExtraFields().tariff;
    const index = tariffs.map(tariff => tariff.id).indexOf(tariff);
    return {
      id: tariffs[index].rateTypeId.id,
      name: tariffs[index].rateTypeId.name,
    };
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

  public getOrderStatus(id: string): INameWithId {
    const statuses = this._orderStatusesStore.getOrderStatuses();
    const index = statuses.map(status => status.id).indexOf(id);
    return statuses[index];
  }

  private getPrice(): number {
    return this._price.getValue();
  }

  private resetCarModel() {
    this.changeCarModel(NO_MODEL);
    this._modelStore.changeActiveCar('');
  }

  private resetExtraField() {
    this.changeExtraField(NO_EXTRA);
  }
}
