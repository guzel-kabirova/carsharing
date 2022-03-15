import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {intervalToDuration} from 'date-fns';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';

import {COLORS, SERVICES, TARIFFS} from './step-extra.const';
import {StepExtraFacadeService} from './services/step-extra.facade.service';
import {Extra} from './step-extra.enum';
import {IDuration} from './step-extra.interface';

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
   this.createForm();
    this.form?.patchValue(this._facade.getExtraField());
  }

  private createForm() {
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
    this.checkDates();
    this._facade.changeExtraField(this.form?.value);
  }

  private checkDates() {
    const valueFrom = this.form?.get('dateFrom')?.value;
    const valueTo = this.form?.get('dateTo')?.value;

    if (valueFrom && valueTo) {
      const dayFrom = valueFrom[0];
      const dayTo = valueTo[0];
      const timeFrom = valueFrom[1];
      const timeTo = valueTo[1];

      if(dayFrom && dayTo && timeFrom && timeTo) {
        const dateFrom = this.dayTimeToUnix(dayFrom, timeFrom);
        const dateTo = this.dayTimeToUnix(dayTo, timeTo);
        this.setIsDatesIntervalOk(dateFrom, dateTo);

        const duration = intervalToDuration({start: dateFrom, end: dateTo}) as IDuration;
        this.setDuration(duration);
      }
    }
  }

  private dayTimeToUnix(day: TuiDay, time: TuiTime): number {
    return day.toLocalNativeDate().getTime() + time.toAbsoluteMilliseconds();
  }

  private setIsDatesIntervalOk(dateFrom: number, dateTo: number) {
    this.isDatesIntervalOk = dateFrom <= dateTo;
  }

  private setDuration(duration: IDuration) {
    this.isDatesIntervalOk && this._facade.changeDuration(duration);
  }
}
