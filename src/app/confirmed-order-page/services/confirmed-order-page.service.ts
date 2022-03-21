import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {IOrderResponse} from '../../order-page/order-page.interface';
import {API_URL} from '../../shared/app.const';

@Injectable({
  providedIn: 'root',
})
export class ConfirmedOrderPageService {
  constructor(private _http: HttpClient) {}

  public getOrderInfo(id: string): Observable<IOrderResponse> {
    return this._http.get<{ data: IOrderResponse }>(`${API_URL}db/order/${id}`)
      .pipe(map(response => response.data));
  }
}
