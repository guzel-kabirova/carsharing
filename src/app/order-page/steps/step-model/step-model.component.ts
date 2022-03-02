import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {MODEL_TYPES} from '../../order-page.const';

@Component({
  selector: 'app-step-model',
  templateUrl: './step-model.component.html',
  styleUrls: ['./step-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepModelComponent implements OnInit {
  public form?: FormGroup;
  public modelTypes = MODEL_TYPES;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      model: ['', Validators.required],
    });
  }
}
