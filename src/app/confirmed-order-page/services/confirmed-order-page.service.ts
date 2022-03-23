import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

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

  public cancelOrder(id: string, order: any): Observable<any> {
    return this._http.delete<any>(`${API_URL}db/order/${id}`, order)
      .pipe(tap(response => console.log(response)));
  }
}
