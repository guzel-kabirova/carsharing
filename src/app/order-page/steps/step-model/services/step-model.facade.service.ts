import {Injectable} from '@angular/core';

import {StepModelApiService} from './step-model.api.service';
import {StepModelStoreService} from './step-model.store.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepModelFacadeService {
  public store = this._store;

  constructor(
    private _api: StepModelApiService,
    private _store: StepModelStoreService,
  ) {}

  getCars(): Observable<any> {
    return this._api.getCars();
  }

  getCategories(): Observable<any> {
    return this._api.getCategories();
  }
}
