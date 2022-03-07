import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

import {PointsOfIssueModel} from '../step-location.interface';

@Injectable({
  providedIn: 'root',
})
export class StepLocationStoreService {
  private pointsOfIssue = new BehaviorSubject<PointsOfIssueModel[]>([]);
  public pointsOfIssue$ = this.pointsOfIssue.asObservable();

  private filteredPointsOfIssue = new BehaviorSubject<PointsOfIssueModel[]>([]);
  public filteredPointsOfIssue$ = this.filteredPointsOfIssue.asObservable();

  constructor() {}

  public setPointsOfIssue(points: any) {
    this.pointsOfIssue.next(points);
  }

  public filterPointsOfIssueByCity(city: string) {
    const filteredPoints = this.pointsOfIssue.getValue()?.filter(point => point.city === city);
    this.filteredPointsOfIssue.next(filteredPoints);
  }
}
