import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {COLORS, SERVICES, TARIFFS} from './step-extra.const';
import {StepExtraFacadeService} from './services/step-extra.facade.service';
import {Extra} from './step-extra.enum';
import {format, intervalToDuration} from 'date-fns';
import {IDuration, TDateFieldName} from './step-extra.interface';
import {ZERO_DURATION} from '../steps.initial';

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
  public isDatesIntervalOk = true;

  constructor(
    private _fb: FormBuilder,
    private _facade: StepExtraFacadeService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      color: ['', Validators.required],
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required],
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

  setTime(dateName: TDateFieldName) {
    const dateFrom = this.form?.get('dateFrom')?.value;
    const dateTo = this.form?.get('dateTo')?.value;

    if (dateName === 'dateFrom') {
      this.form?.patchValue({dateFrom});
    } else {
      this.form?.patchValue({dateTo});
    }

    if (!(this.form?.get('dateFrom')?.hasError('pattern') || this.form?.get('dateTo')?.hasError('pattern'))) {
      this.checkDates(dateFrom, dateTo);
    }
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
    if (dateName === 'dateFrom') {
      this.form?.patchValue({dateFrom: ''});
    } else {
      this.form?.patchValue({dateTo: ''});
    }
    this._facade.changeDuration(ZERO_DURATION);
  }

  private checkDates(dateFrom: string, dateTo: string) {
    if (dateFrom && dateTo) {
      const dateFromUnix = StepExtraComponent.getUnixTime(dateFrom);
      const dateToUnix = StepExtraComponent.getUnixTime(dateTo);
      this.isDatesIntervalOk = dateFromUnix < dateToUnix;
      const duration = intervalToDuration({start: dateFromUnix, end: dateToUnix}) as IDuration;
      this.setDuration(duration);
    }
  }

  private setDuration(duration: IDuration) {
    this.isDatesIntervalOk && this._facade.changeDuration(duration);
  }

  private static getUnixTime(date: string): number {
    const [year, month, day] = date.split(' ')[0].split('.').reverse().map(Number);
    const [hour, minute] = date.split(' ')[1].split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute).getTime();
  }
}
