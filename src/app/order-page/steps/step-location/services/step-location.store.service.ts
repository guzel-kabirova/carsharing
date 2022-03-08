import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

import {PointsOfIssueModel} from '../step-location.interface';

@Injectable({
  providedIn: 'root',
})
export class StepLocationStoreService {
  private _cities = new BehaviorSubject<string[]>([]);
  public cities$ = this._cities.asObservable();

  private _pointsOfIssue = new BehaviorSubject<PointsOfIssueModel[]>([]);

  private _filteredPointsOfIssue = new BehaviorSubject<PointsOfIssueModel[]>([]);
  public filteredPointsOfIssue$ = this._filteredPointsOfIssue.asObservable();

  constructor() {}

  public setCities(cities: string[]) {
    this._cities.next(cities);
  }

  public setPointsOfIssue(points: PointsOfIssueModel[]) {
    this._pointsOfIssue.next(points);
  }

  public filterPointsOfIssueByCity(city: string) {
    const filteredPoints = this._pointsOfIssue.getValue()?.filter(point => point.city === city);
    this._filteredPointsOfIssue.next(filteredPoints);
  }
}
