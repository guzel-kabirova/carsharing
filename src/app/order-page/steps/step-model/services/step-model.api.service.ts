import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, switchMapTo, tap} from 'rxjs/operators';

import {API_URL} from '../../../../shared/app.const';
import {CarModel, CategoryModel, IGetCarsResponse, IGetCategoriesResponse} from '../step-model.interface';
import {StepModelStoreService} from './step-model.store.service';

@Injectable({
  providedIn: 'root',
})
export class StepModelApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepModelStoreService,
  ) {}

  getCars(): Observable<any> {
    return this._http.get<IGetCarsResponse>(`${API_URL}db/car`)
      .pipe(
        map(response => response.data.map(car => new CarModel(car))),
        tap(cars => this._store.setCars(cars)),
        switchMapTo(this._store.cars$),
      );
  }

  getCategories(): Observable<CategoryModel[]> {
    return this._http.get<IGetCategoriesResponse>(`${API_URL}db/category`)
      .pipe(
        map(response => response.data.map(category => new CategoryModel(category))),
        tap(categories => this._store.setCategories(categories)),
      );
  }
}
