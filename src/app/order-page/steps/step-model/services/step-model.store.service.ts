import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {CarModel, CategoryModel} from '../step-model.interface';

@Injectable({
  providedIn: 'root',
})
export class StepModelStoreService {
  private _cars = new BehaviorSubject<CarModel[]>([]);
  public cars$ = this._cars.asObservable();

  private _filteredCars = new BehaviorSubject<CarModel[]>([]);
  public filteredCars$ = this._filteredCars.asObservable();

  private categories = new BehaviorSubject<CategoryModel[]>([]);
  public categories$ = this.categories.asObservable();

  constructor() {}

  setCars(cars: CarModel[]) {
    this._cars.next(cars);
  }

  setCategories(categories: CategoryModel[]) {
    this.categories.next(categories);
  }

  changeActiveCar(id: string) {
    const newCars = this._cars.getValue().map(car => car.id === id ? {...car, isActive: true} : {
      ...car,
      isActive: false,
    });
    this._cars.next(newCars);
  }

  filterCarsByCategories(id: string) {
    const filteredCars = this._cars.getValue().filter(car => car.categoryId.id === id);
    this._filteredCars.next(filteredCars);
  }
}
