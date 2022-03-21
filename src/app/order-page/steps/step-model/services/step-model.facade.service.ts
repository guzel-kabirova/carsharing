import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {StepModelApiService} from './step-model.api.service';
import {StepModelStoreService} from './step-model.store.service';
import {StepsStateService} from '../../services/steps.state.service';
import {CarModel, CategoryModel} from '../step-model.interface';
import {PreloaderService} from '../../../../shared/components/preloader/preloader.service';

@Injectable({
  providedIn: 'root',
})
export class StepModelFacadeService {
  public store = this._store;
  public preloader = this._preloader;

  constructor(
    private _api: StepModelApiService,
    private _state: StepsStateService,
    private _store: StepModelStoreService,
    private _preloader: PreloaderService,
  ) {}

  public getCars(): Observable<CarModel[]> {
    return this._api.getCars();
  }

  public getCategories(): Observable<CategoryModel[]> {
    return this._api.getCategories();
  }

  public changeCarModel(car: CarModel) {
    this._state.changeCarModel(car);
  }

  public changeActiveCar(id: string) {
    this._store.changeActiveCar(id);
  }
}
