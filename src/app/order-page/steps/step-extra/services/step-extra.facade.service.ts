import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {StepsStateService} from '../../services/steps.state.service';
import {IDuration, IExtraFields, ITariff} from '../step-extra.interface';
import {StepExtraStoreService} from './step-extra.store.service';
import {StepExtraApiService} from './step-extra.api.service';

@Injectable({providedIn: 'root'})
export class StepExtraFacadeService {
  public state = this._state;

  constructor(
    private _state: StepsStateService,
    private _store: StepExtraStoreService,
    private _api: StepExtraApiService,
  ) {}

  changeExtraField(value: IExtraFields) {
    this._state.changeExtraField(value);
  }

  changeDuration(duration: IDuration) {
    this._state.changeDuration(duration);
  }

  getExtraField(): IExtraFields {
    return this._state.getExtraFields();
  }

  getTariffsStream(): Observable<ITariff[]> {
    return this._api.getTariffs();
  }

  getTariffs(): ITariff[] {
    return this._store.getTariffs();
  }
}
