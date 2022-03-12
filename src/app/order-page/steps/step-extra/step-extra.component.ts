import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {COLORS, SERVICES, TARIFFS} from './step-extra.const';
import {StepExtraFacadeService} from './services/step-extra.facade.service';

@Component({
  selector: 'app-step-extra',
  templateUrl: './step-extra.component.html',
  styleUrls: ['./step-extra.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepExtraComponent implements OnInit {
  public form?: FormGroup;
  public colors = COLORS;
  public tariffs = TARIFFS;
  public services = SERVICES;
  public carModel$ = this._facade.state.carModel$;

  constructor(
    private _fb: FormBuilder,
    private _facade: StepExtraFacadeService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      color: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      rate: ['', Validators.required],
      extra: ['', Validators.required],
    });
  }
}
