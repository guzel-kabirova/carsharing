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
    const newCars = this.getCarsWithActive(this._cars.getValue(), id);
    this.setCars(newCars);

    const newFilteredCars = this.getCarsWithActive(this._filteredCars.getValue(), id);
    this.setFilteredCars(newFilteredCars);
  }

  private getCarsWithActive(cars: CarModel[], id: string): CarModel[] {
    return cars.map(car => ({...car, isActive: car.id === id}));
  }

  public filterCarsByCategories(id: string) {
    const filteredCars = this._cars.getValue().filter(car => car.categoryId.id === id);
    this._filteredCars.next(filteredCars);
  }
}
