import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {CarModel, CategoryModel} from '../step-model.interface';

@Injectable({
  providedIn: 'root',
})
export class StepModelStoreService {
  private cars = new BehaviorSubject<CarModel[]>([]);
  public cars$ = this.cars.asObservable();

  private categories = new BehaviorSubject<CategoryModel[]>([]);
  public categories$ = this.categories.asObservable();

  constructor() {}

  setCars(cars: CarModel[]) {
    this.cars.next(cars);
  }

  setCategories(categories: CategoryModel[]) {
    this.categories.next(categories);
  }

  changeActiveCar(id: string) {
    const newCars = this.cars.getValue().map(car => car.id === id ? {...car, isActive: true} : {...car, isActive: false});
    this.cars.next(newCars);
  }
}
