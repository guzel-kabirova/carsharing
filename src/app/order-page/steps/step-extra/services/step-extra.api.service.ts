import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import {API_URL} from '../../../../shared/app.const';
import {IResponse} from '../../../order-page.interface';
import {ITariff} from '../step-extra.interface';
import {StepExtraStoreService} from './step-extra.store.service';

@Injectable({
  providedIn: 'root',
})
export class StepExtraApiService {
  constructor(
    private _http: HttpClient,
    public _store: StepExtraStoreService,
  ) {}

  getTariffs(): Observable<ITariff[]> {
    return this._http.get<IResponse<ITariff>>(`${API_URL}db/rate`)
      .pipe(
        map(response => response.data.filter(tariff => tariff.rateTypeId)),
        tap(tariff => this._store.setTariffs(tariff)),
      );
  }
}
