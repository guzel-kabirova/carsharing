import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {COLORS, SERVICES, TARIFFS} from './step-extra.const';
import {StepExtraFacadeService} from './services/step-extra.facade.service';
import {Extra} from './step-extra.enum';
import {format} from 'date-fns';
import {TDateFieldName} from './step-extra.interface';

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
  public carModel = this._facade.state.getCarModel();
  public isDateFromOpen = false;
  public isDateToOpen = false;

  constructor(
    private _fb: FormBuilder,
    private _facade: StepExtraFacadeService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      color: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      tariff: ['', Validators.required],
      fullTank: [false],
      babyChair: [false],
      rightHand: [false],
    });
  }

  public setColor(color: string) {
    this.form?.patchValue({color});
  }

  public setDateFrom(date: Date) {
    const dateFrom = format(date, 'dd.MM.yyyy');
    this.form?.patchValue({dateFrom});
  }

  public setDateTo(date: Date) {
    const dateTo = format(date, 'dd.MM.yyyy');
    this.form?.patchValue({dateTo});
  }

  public setTariff(tariff: string) {
    this.form?.patchValue({tariff});
  }

  public setExtra(value: string) {
    if (StepExtraComponent.isExtra(value)) {
      switch (value) {
        case Extra.FullTank:
          this.form?.patchValue({fullTank: !this.form?.get(Extra.FullTank)?.value});
          break;
        case Extra.BabyChair:
          this.form?.patchValue({babyChair: !this.form?.get(Extra.BabyChair)?.value});
          break;
        case Extra.RightHand:
          this.form?.patchValue({rightHand: !this.form?.get(Extra.RightHand)?.value});
          break;
      }
    }
  }

  private static isExtra(value: string): value is Extra {
    return value === Extra.FullTank || value === Extra.BabyChair || value === Extra.RightHand;
  }

  public changeExtraField() {
    this._facade.changeExtraField(this.form?.value);
  }

  public resetDate(dateName: TDateFieldName) {
    if(dateName === 'dateFrom') {
      this.form?.patchValue({dateFrom: ''});
    } else {
      this.form?.patchValue({dateTo: ''});
    }
  }
}
