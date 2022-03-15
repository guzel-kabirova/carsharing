import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

import {StepsStateService} from '../../steps/services/steps.state.service';
import {Tariff} from '../../steps/step-extra/step-extra.enum';
import {CarModel} from '../../steps/step-model/step-model.interface';
import {DestroyService} from '../../../shared/services/destroy.service';
import {IDuration, IExtraFields} from '../../steps/step-extra/step-extra.interface';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class InfoListComponent implements OnInit {
  public state$ = this._state.stepsState$;
  public location$ = this._state.location$;
  public carModel?: CarModel;
  public extraFields?: IExtraFields;
  public duration?: IDuration;
  public tariff = Tariff;

  public price = 0;

  get isDuration(): boolean {
    return !!(this.duration && (this.duration.years || this.duration.months || this.duration.days || this.duration.hours || this.duration.minutes));
  }

  get years(): string {
    return this.duration && this.duration.years ? this.duration.years + 'г' : '';
  }

  get months(): string {
    return this.duration && this.duration.months ? this.duration.months + 'мес' : '';
  }

  get days(): string {
    return this.duration && this.duration.days ? this.duration.days + 'д' : '';
  }

  get hours(): string {
    return this.duration && this.duration.hours ? this.duration.hours + 'ч' : '';
  }

  get minutes(): string {
    return this.duration && this.duration.minutes ? this.duration.minutes + 'мин' : '';
  }

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _state: StepsStateService,
  ) { }

  ngOnInit(): void {
    this._state.view$
      .pipe(takeUntil(this.destroy$),
        tap(view => {
          this.carModel = view.carModel;
          this.extraFields = view.extraFields;
          this.duration = view.duration;
          this.setCarPrice();
        }))
      .subscribe();
  }

  private setCarPrice() {
    this.price = this.calculatedPrice() < this.getCarPriceMax() ? this.calculatedPrice() : this.getCarPriceMax();
  }

  private calculatedPrice(): number {
    return this.getCarPriceMin() + this.getTariffPrice() + this.getExtraPrice();
  }

  private getCarPriceMin(): number {
    return this.carModel?.priceMin ?? 0;
  }

  private getCarPriceMax(): number {
    return this.carModel?.priceMax ?? 0;
  }

  private getTariffPrice(): number {
    if (this.extraFields?.tariff === this.tariff.Minute) {
      return 7 * ((this.duration?.minutes ?? 0) + (this.duration?.days ?? 0) * 24 * 60) + ((this.duration?.hours ?? 0) * 60);
    } else {
      return 1999 * (this.duration?.days ?? 0);
    }
  }

  private getExtraPrice(): number {
    return this.getFullTankPrice() + this.getBabyChairPrice() + this.getRightHandPrice();
  }

  private getFullTankPrice(): number {
    return this.extraFields?.fullTank ? 500 : 0;
  }

  private getBabyChairPrice(): number {
    return this.extraFields?.babyChair ? 200 : 0;
  }

  private getRightHandPrice(): number {
    return this.extraFields?.rightHand ? 1600 : 0;
  }
}
