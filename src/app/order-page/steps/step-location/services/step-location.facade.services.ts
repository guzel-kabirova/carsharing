import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {StepsStateService} from '../../services/steps.state.service';
import {StepLocationStoreService} from './step-location.store.service';
import {ILocation} from '../../steps.interface';
import {StepLocationApiService} from './step-location.api.service';
import {IPointOfIssue} from '../step-location.interface';

@Injectable({
  providedIn: 'root',
})
export class StepLocationFacadeServices {

  public store = this._store;

  constructor(
    private _state: StepsStateService,
    private _api: StepLocationApiService,
    private _store: StepLocationStoreService,
  ) {}

  public getCities(): Observable<string[]> {
    return this._api.getCities();
  }

  public getLocation(): ILocation {
    return this._state.getLocation();
  }

  public changeLocation(value: ILocation) {
    this._state.changeLocation(value);
  }

  public getPointsOfIssue(): Observable<IPointOfIssue[]> {
    return this._api.getPointsWithCoordinates();
  }
}
