import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {StepModelFacadeService} from './services/step-model.facade.service';
import {ALL_CATEGORIES} from './step-model.const';
import {CarModel} from './step-model.interface';

@Component({
  selector: 'app-step-model',
  templateUrl: './step-model.component.html',
  styleUrls: ['./step-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepModelComponent implements OnInit {
  public form?: FormGroup;
  public cars$ = this._facade.store.cars$;

  public allCategories = ALL_CATEGORIES;
  public categories$ = this._facade.getCategories();

  public isLoading$ = this._facade.preloader.isLoading$;

  constructor(
    private _fb: FormBuilder,
    private _facade: StepModelFacadeService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      model: [''],
    });
  }

  public filter(id: string) {
    if (id !== 'withoutCategory') {
      this._facade.store.filterCarsByCategories(id);
      this.cars$ = this._facade.store.filteredCars$;
    } else {
      this.cars$ = this._facade.store.cars$;
    }
  }

  public selectCar(car: CarModel) {
    this._facade.changeActiveCar(car.id);
    this._facade.changeCarModel(car);
  }
}
