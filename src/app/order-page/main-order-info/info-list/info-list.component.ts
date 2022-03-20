import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

import {StepsStateService} from '../../steps/services/steps.state.service';
import {Tariff} from '../../steps/step-extra/step-extra.enum';
import {CarModel} from '../../steps/step-model/step-model.interface';
import {DestroyService} from '../../../shared/services/destroy.service';
import {IDuration, IExtraFields, ITariff} from '../../steps/step-extra/step-extra.interface';
import {StepExtraFacadeService} from '../../steps/step-extra/services/step-extra.facade.service';
import {ExtraServicePrice} from './info-list.const';

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
  private tariffs: ITariff[] = [];

  public price = 0;

  get isDuration(): boolean {
    return !!(this.duration && (this.duration.years || this.duration.months || this.duration.days || this.duration.hours || this.duration.minutes));
  }

  get years(): string {
    return this.duration?.years ? `${this.duration?.years}г` : '';
  }

  get months(): string {
    return this.duration?.months ? `${this.duration?.months}мес` : '';
  }

  get days(): string {
    return this.duration?.days ? `${this.duration?.days}д` : '';
  }

  get hours(): string {
    return this.duration?.hours ? `${this.duration?.hours}ч` : '';
  }

  get minutes(): string {
    return this.duration?.minutes ? `${this.duration?.minutes}мин` : '';
  }

  get durationValue(): string {
    return this.years + ' ' + this.months + ' ' + this.days + ' ' + this.hours + ' ' + this.minutes;
  }

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _state: StepsStateService,
    private _facade: StepExtraFacadeService,
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

    this._facade.getTariffsStream()
      .pipe(tap(tariffs => this.tariffs = tariffs), takeUntil(this.destroy$))
      .subscribe();
  }

  private setCarPrice() {
    const min = this.getCarPriceMin();
    const max = this.getCarPriceMax();
    const current = this.calculatedPrice();

    switch (true) {
      case min > current:
        this.price = min;
        break;
      case current > max:
        this.price = max;
        break;
      default:
        this.price = current;
        break;
    }

    this._state.changePrice(this.price);
  }

  private calculatedPrice(): number {
    return this.getTotalTariffPrice() + this.getExtraPrice();
  }

  private getCarPriceMin(): number {
    return this.carModel?.priceMin ?? 0;
  }

  private getCarPriceMax(): number {
    return this.carModel?.priceMax ?? 0;
  }

  private getTotalTariffPrice(): number {
    switch (this.extraFields?.tariff) {
      case this.tariff.Minute:
        return this.getTariffPrice(this.tariff.Minute) * ((this.duration?.minutes ?? 0) + (this.duration?.hours ?? 0) * 60 + (this.duration?.days ?? 0) * 24 * 60);
      case this.tariff.Month:
        return this.getTariffPrice(this.tariff.Month) * ((this.duration?.months ?? 0) + (this.duration?.years ?? 0) * 12);
      case this.tariff.Week:
        return this.getTariffPrice(this.tariff.Week) * ((this.duration?.days ?? 0) / 7 + (this.duration?.months ?? 0) * 4 + (this.duration?.years ?? 0) * 52);
      case this.tariff.Day:
        return this.getTariffPrice(this.tariff.Day) * ((this.duration?.days ?? 0) + (this.duration?.months ?? 0) * 30);
      default:
        return 0;
    }
  }

  private getTariffPrice(tariffId: Tariff): number {
    const index = this.tariffs.map(tariff => tariff.id).indexOf(tariffId);
    return this.tariffs[index].price;
  }

  private getExtraPrice(): number {
    return this.getFullTankPrice() + this.getBabyChairPrice() + this.getRightHandPrice();
  }

  private getFullTankPrice(): number {
    return this.extraFields?.fullTank ? ExtraServicePrice.FullTank : 0;
  }

  private getBabyChairPrice(): number {
    return this.extraFields?.babyChair ? ExtraServicePrice.BabyChair : 0;
  }

  private getRightHandPrice(): number {
    return this.extraFields?.rightHand ? ExtraServicePrice.RightHand : 0;
  }
}
