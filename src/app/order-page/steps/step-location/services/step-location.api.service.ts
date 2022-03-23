import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

import {StepLocationStoreService} from './step-location.store.service';
import {
  ICityDto,
  ICoordinates,
  IGeocoderResponse,
  IPointOfIssue,
  IPointWithCoordinate,
} from '../step-location.interface';
import {API_URL} from '../../../../shared/app.const';
import {IResponse} from '../../../order-page.interface';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StepLocationApiService {
  constructor(
    private _http: HttpClient,
    private _store: StepLocationStoreService,
  ) {}

  public getCities(): Observable<string[]> {
    return this._http.get<IResponse<ICityDto>>(`${API_URL}db/city`)
      .pipe(
        map(response => response.data.map(city => city.name)),
        tap(cities => this._store.setCities(cities)),
      );
  }

  public getPointsWithCoordinates(): Observable<IPointWithCoordinate[]> {
    return this.getPointsOfIssue().pipe(
      switchMap(points => {
        const requests = points.map(point => this.getCoordinates(`г.${point.cityId.name}` + ` ${point.address}`));

        return forkJoin(requests).pipe(
          map(coordinates => points.map((point, i) => ({...point, coordinate: coordinates[i]}))),
          tap(points => this._store.setPointsOfIssue(points),
          ),
        );
      }),
    );
  }

  private getPointsOfIssue(): Observable<IPointOfIssue[]> {
    return this._http.get<IResponse<IPointOfIssue>>(`${API_URL}db/point`)
      .pipe(
        map(response => response.data.filter(point => point.cityId)),
      );
  }

  private getCoordinates(address: string): Observable<ICoordinates> {
    return this._http.get<IGeocoderResponse>(`https://geocode-maps.yandex.ru/1.x/?apikey=${environment.apiKeyMap}&format=json&geocode=${address}`)
      .pipe(
        map(response => {
          const [lng, lat] = response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(Number);
          return {lat, lng} as unknown as ICoordinates;
        }),
      );
  }
}
