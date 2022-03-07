import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

import {StepLocationStoreService} from './step-location.store.service';
import {IGetPointsOfIssueResponse, PointsOfIssueModel} from '../step-location.interface';
import {API_URL} from '../../../../shared/app.const';

@Injectable({
  providedIn: 'root',
})
export class StepLocationApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepLocationStoreService,
  ) {}

  getPointsOfIssue(): Observable<any> {
    return this._http.get<IGetPointsOfIssueResponse>(`${API_URL}db/point`)
      .pipe(
        map(response => response.data.filter(point => point.cityId).map(point => new PointsOfIssueModel(point))),
        tap(points => this._store.setPointsOfIssue(points)),
        switchMap(() => this._store.pointsOfIssue$),
      );
  }
}
