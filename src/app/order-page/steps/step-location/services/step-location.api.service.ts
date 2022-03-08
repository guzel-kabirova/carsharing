import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {StepLocationStoreService} from './step-location.store.service';
import {IGetCitiesResponse, IGetPointsOfIssueResponse, PointsOfIssueModel} from '../step-location.interface';
import {API_URL} from '../../../../shared/app.const';

@Injectable({
  providedIn: 'root',
})
export class StepLocationApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepLocationStoreService,
  ) {}

  public getCities(): Observable<string[]> {
    return this._http.get<IGetCitiesResponse>(`${API_URL}db/city`)
      .pipe(
        map(response => response.data.map(city => city.name)),
        tap(cities => this._store.setCities(cities)),
      );
  }

  public getPointsOfIssue(): Observable<PointsOfIssueModel[]> {
    return this._http.get<IGetPointsOfIssueResponse>(`${API_URL}db/point`)
      .pipe(
        map(response => response.data.filter(point => point.cityId).map(point => new PointsOfIssueModel(point))),
        tap(points => this._store.setPointsOfIssue(points)),
      );
  }
}
