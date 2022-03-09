import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter, map, takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {StepLocationFacadeServices} from './services/step-location.facade.services';
import {DestroyService} from '../../../shared/services/destroy.service';

@Component({
  selector: 'app-step-location',
  templateUrl: './step-location.component.html',
  styleUrls: ['./step-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class StepLocationComponent implements OnInit {
  public form?: FormGroup;
  public cities$ = this._facade.store.cities$;
  public isCityInputClicked = false;
  public isPointsInputClicked = false;
  public filteredPoints$ = this._facade.store.filteredPointsOfIssue$
    .pipe(filter(() => this.isPointsInputClicked), map(points => points.map(point => point.address)));

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _fb: FormBuilder,
    private _facade: StepLocationFacadeServices,
  ) { }

  ngOnInit(): void {
    this._facade.getCities().pipe(takeUntil(this.destroy$)).subscribe();
    this.form = this._fb.group({
      city: ['', Validators.required],
      pointOfIssue: ['', Validators.required],
    });

    this.form.setValue(this._facade.getLocation());
    this._facade.getPointsOfIssue().pipe(takeUntil(this.destroy$)).subscribe();
  }

  public changeLocation() {
    this._facade.changeLocation(this.form?.value);
  }

  public resetCity() {
    this.form?.patchValue({
      city: '',
    });
    this.changeLocation();
  }

  public showPoints() {
    this.isPointsInputClicked = true;
    const city = this.form?.get('city')?.value;
    this._facade.store.filterPointsOfIssueByCity(city);
  }

  public resetPoints() {
    this.form?.patchValue({
      pointOfIssue: '',
    });
    this.changeLocation();
  }
}
