import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {API_URL} from '../../../../shared/app.const';
import {CarModel, CategoryModel, ICarsDto, ICategory} from '../step-model.interface';
import {StepModelStoreService} from './step-model.store.service';
import {IResponse} from '../../../order-page.interface';

@Injectable({
  providedIn: 'root',
})
export class StepModelApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepModelStoreService,
  ) {}

  public getCars(): Observable<CarModel[]> {
    return this._http.get<IResponse<ICarsDto>>(`${API_URL}db/car`)
      .pipe(
        map(response => response.data.map(car => new CarModel(car))),
        tap(cars => this._store.setCars(cars)),
      );
  }

  public getCategories(): Observable<CategoryModel[]> {
    return this._http.get<IResponse<ICategory>>(`${API_URL}db/category`)
      .pipe(
        map(response => response.data.map(category => new CategoryModel(category))),
        tap(categories => this._store.setCategories(categories)),
      );
  }
}
