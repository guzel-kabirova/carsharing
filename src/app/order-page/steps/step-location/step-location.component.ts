import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter, map} from 'rxjs/operators';

import {StepLocationFacadeServices} from './services/step-location.facade.services';

@Component({
  selector: 'app-step-location',
  templateUrl: './step-location.component.html',
  styleUrls: ['./step-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepLocationComponent implements OnInit {
  public form?: FormGroup;
  public cities$ = this._facade.store.cities$;
  public isCityInputClicked = false;
  public isPointsInputClicked = false;
  public filteredPoints$ = this._facade.store.filteredPointsOfIssue$
    .pipe(filter(() => this.isPointsInputClicked), map(points => points.map(point => point.address)));

  constructor(
    private _fb: FormBuilder,
    private _facade: StepLocationFacadeServices,
  ) { }

  ngOnInit(): void {
    this._facade.getCities().subscribe();
    this.form = this._fb.group({
      city: ['', Validators.required],
      pointOfIssue: ['', Validators.required],
    });

    this.form.setValue(this._facade.getLocation());
    this._facade.getPointsOfIssue().subscribe();
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
