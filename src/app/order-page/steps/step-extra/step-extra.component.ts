import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {COLORS, SERVICES, TARIFFS} from './step-extra.const';
import {StepExtraFacadeService} from './services/step-extra.facade.service';
import {Extra} from './step-extra.enum';
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
  public isDatesIntervalOk = true;
  public extra = [Extra.FullTank, Extra.BabyChair, Extra.RightHand];

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

    this.form.patchValue(this._facade.getExtraField());
  }

  public setColor(color: string) {
    this.form?.patchValue({color});
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

  private setDuration(duration: IDuration) {
    this.isDatesIntervalOk && this._facade.changeDuration(duration);
  }

  private static getUnixTime(date: string): number {
    const [year, month, day] = date.split(' ')[0].split('.').reverse().map(Number);
    const [hour, minute] = date.split(' ')[1].split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute).getTime();
  }
}
