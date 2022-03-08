import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {StepModelApiService} from './step-model.api.service';
import {StepModelStoreService} from './step-model.store.service';
import {StepsStateService} from '../../services/steps.state.service';
import {ICarModel} from '../step-model.interface';

@Injectable({
  providedIn: 'root',
})
export class StepModelFacadeService {
  public store = this._store;

  constructor(
    private _api: StepModelApiService,
    private _state: StepsStateService,
    private _store: StepModelStoreService,
  ) {}

  getCars(): Observable<any> {
    return this._api.getCars();
  }

  getCategories(): Observable<any> {
    return this._api.getCategories();
  }

  changeCarModel(car: ICarModel) {
    this._state.changeCarModel(car);
  }

  changeActiveCar(id: string) {
    this._store.changeActiveCar(id);
  }
}
