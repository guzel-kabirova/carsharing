import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {INameWithId, IOrderRequest, IOrderRequestWithId, IResponse} from '../../../order-page.interface';
import {API_URL} from '../../../../shared/app.const';
import {StepFinalStoreService} from './step-final.store.service';

@Injectable({
  providedIn: 'root',
})
export class StepFinalApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepFinalStoreService,
  ) {}

  public getOrderStatuses(): Observable<INameWithId[]> {
    return this._http.get<IResponse<INameWithId>>(`${API_URL}db/orderStatus`)
      .pipe(
        map(response => response.data),
        tap(statuses => this._store.setOrderStatuses(statuses)),
      );
  }

  public sendOrderInfo(orderInfo: IOrderRequest): Observable<IOrderRequestWithId> {
    return this._http.post<{ data: IOrderRequestWithId }>(`${API_URL}db/order`, orderInfo)
      .pipe(map(response => response.data));
  }
}
