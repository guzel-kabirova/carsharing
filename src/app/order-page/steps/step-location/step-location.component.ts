import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {StepLocationFacadeServices} from './services/step-location.facade.services';
import {CITIES} from './step-location.const';

@Component({
  selector: 'app-step-location',
  templateUrl: './step-location.component.html',
  styleUrls: ['./step-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepLocationComponent implements OnInit {
  public form?: FormGroup;
  public cities = CITIES;

  constructor(
    private _fb: FormBuilder,
    private _facade: StepLocationFacadeServices,
  ) { }

  ngOnInit(): void {
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

  public changeCity() {

  }

  public reset() {
    this.form?.patchValue({
      city: '',
    });
    this.changeLocation();
  }
}
