import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IOrderRequest} from '../../order-page/order-page.interface';
import {API_URL} from '../../shared/app.const';

@Injectable({
  providedIn: 'root',
})
export class ConfirmedOrderPageService {
  constructor(private _http: HttpClient) {}

  public getOrderInfo(id: string): Observable<IOrderRequest> {
    return this._http.get<IOrderRequest>(`${API_URL}db/order/${id}`);
  }
}
