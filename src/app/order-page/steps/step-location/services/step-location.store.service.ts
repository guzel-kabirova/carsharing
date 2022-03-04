import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepLocationStoreService {
  private pointsOfIssue = new BehaviorSubject<any>(null);
  public pointsOfIssue$ = this.pointsOfIssue.asObservable();

  constructor() {}

  public setPointsOfIssue(points: any) {
    this.pointsOfIssue.next(points);
  }
}
