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

  private _categories = new BehaviorSubject<CategoryModel[]>([]);
  public categories$ = this._categories.asObservable();

  constructor() {}

  public setCars(cars: CarModel[]) {
    this._cars.next(cars);
  }

  private setFilteredCars(cars: CarModel[]) {
    this._filteredCars.next(cars);
  }

  public setCategories(categories: CategoryModel[]) {
    this._categories.next(categories);
  }

  public changeActiveCar(id: string) {
    const newCars = this._cars.getValue().map(car => car.id === id
      ? {...car, isActive: true}
      : {...car, isActive: false},
    );
    this.setCars(newCars);

    const newFilteredCars = this._filteredCars.getValue().map(car => car.id === id
      ? {...car, isActive: true}
      : {...car, isActive: false},
    );
    this.setFilteredCars(newFilteredCars);
  }

  public filterCarsByCategories(id: string) {
    const filteredCars = this._cars.getValue().filter(car => car.categoryId.id === id);
    this._filteredCars.next(filteredCars);
  }
}
