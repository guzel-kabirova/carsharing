import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {ITariff} from '../step-extra.interface';

@Injectable({
  providedIn: 'root',
})
export class StepExtraStoreService {
  private _tariffs = new BehaviorSubject<ITariff[]>([]);
  public tariffs$ = this._tariffs.asObservable();

  constructor() {}

  setTariffs(tariffs: ITariff[]) {
    this._tariffs.next(tariffs);
  }

  getTariffs(): ITariff[] {
    return this._tariffs.getValue();
  }
}
