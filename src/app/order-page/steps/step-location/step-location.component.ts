import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter, map, takeUntil, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {StepLocationFacadeServices} from './services/step-location.facade.services';
import {DestroyService} from '../../../shared/services/destroy.service';
import {IPointWithCoordinate} from './step-location.interface';
import {DEFAULT_COORDINATES} from './step-location.const';

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
  public pointsWithCoordinates?: IPointWithCoordinate[];
  public filteredPoints$ = this._facade.store.filteredPointsOfIssue$
    .pipe(
      filter(() => this.isPointsInputClicked),
      tap(points => this.pointsWithCoordinates = points),
      map(points => points.map(point => point.address)));

  public latitude = DEFAULT_COORDINATES.lat;
  public longitude = DEFAULT_COORDINATES.lng;

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
    this.resetPoints();
    this.resetCoordinates();
  }

  private resetCoordinates() {
    this.latitude = DEFAULT_COORDINATES.lat;
    this.longitude = DEFAULT_COORDINATES.lng;
  }

  public showPoints() {
    this.isPointsInputClicked = true;
    const city = this.form?.get('city')?.value;
    this._facade.store.filterPointsOfIssueByCity(city);
    if (city) {
      this.findPointsCoordinates();
    }
  }

  private findPointsCoordinates() {
    if (this.pointsWithCoordinates) {
      const firstPoint = this.pointsWithCoordinates[0];
      this.latitude = firstPoint?.coordinate.lat;
      this.longitude = firstPoint?.coordinate.lng;
    }
  }

  public resetPoints() {
    this.form?.patchValue({
      pointOfIssue: '',
    });
    this.changeLocation();
    this.resetCoordinates();
  }
}
