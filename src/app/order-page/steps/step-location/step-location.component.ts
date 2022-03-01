import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {StepsService} from '../steps.service';

@Component({
  selector: 'app-step-location',
  templateUrl: './step-location.component.html',
  styleUrls: ['./step-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepLocationComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _steps: StepsService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      city: ['', Validators.required],
      pointOfIssue: ['', Validators.required],
    });

    this.form.setValue(this._steps.getLocation());
  }

  public changeLocation() {
    this._steps.changeLocation(this.form?.value);
  }

  public reset() {
    this.form?.patchValue({
      city: '',
    });
    this.changeLocation();
  }
}
