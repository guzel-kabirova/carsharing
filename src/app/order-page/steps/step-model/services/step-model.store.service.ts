import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepModelStoreService {
  private cars = new BehaviorSubject([]);
  public cars$ = this.cars.asObservable();

  private categories = new BehaviorSubject([]);
  public categories$ = this.categories.asObservable();

  constructor() {}

  setCars(cars: any) {
    this.cars.next(cars);
  }

  setCategories(categories: any) {
    this.cars.next(categories);
  }
}
