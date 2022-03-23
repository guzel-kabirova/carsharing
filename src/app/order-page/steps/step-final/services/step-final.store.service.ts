import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {INameWithId} from '../../../order-page.interface';

@Injectable({
  providedIn: 'root',
})
export class StepFinalStoreService {
  private _orderStatuses = new BehaviorSubject<INameWithId[]>([]);

  constructor() {}

  public setOrderStatuses(statuses: INameWithId[]) {
    this._orderStatuses.next(statuses);
  }

  public getOrderStatuses(): INameWithId[] {
    return this._orderStatuses.getValue();
  }
}
