import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ConfirmedOrderPageService} from './services/confirmed-order-page.service';
import {StepsStateService} from '../order-page/steps/services/steps.state.service';
import {IOrderResponse} from '../order-page/order-page.interface';
import {CarModel} from '../order-page/steps/step-model/step-model.interface';
import {fromUnix} from '../shared/utility/taiga-date-time-from-unix';
import {intervalToDuration} from 'date-fns';
import {IDuration} from '../order-page/steps/step-extra/step-extra.interface';
import {CONFIRMED_STEP_NUMBER} from './confirmed-order-page.const';
import {StepLocationStoreService} from '../order-page/steps/step-location/services/step-location.store.service';
import {DestroyService} from '../shared/services/destroy.service';

@Component({
  selector: 'app-confirmed-order-page',
  templateUrl: './confirmed-order-page.component.html',
  styleUrls: ['./confirmed-order-page.component.scss', '../order-page/order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ConfirmedOrderPageComponent implements OnInit {
  private confirmedStepNumber = CONFIRMED_STEP_NUMBER;
  public id = '';

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _route: ActivatedRoute,
    private _service: ConfirmedOrderPageService,
    private _state: StepsStateService,
    private _locationStore: StepLocationStoreService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(
      tap(params => this.id = params.id),
      switchMap(() => this._service.getOrderInfo(this.id)),
      tap(info => this.setOrderInfo(info)),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  private setOrderInfo(info: IOrderResponse) {
    this._state.changeActiveStep(this.confirmedStepNumber);
    this._state.changeLocation({city: info.cityId.name, pointOfIssue: info.pointId.address});
    this._state.changeCarModel(new CarModel(info.carId));
    this._state.changeExtraField(
      {
        color: info.color,
        dateFrom: fromUnix(info.dateFrom),
        dateTo: fromUnix(info.dateTo),
        tariff: info.rateId?.id || '',
        fullTank: info.isFullTank,
        babyChair: info.isNeedChildChair,
        rightHand: info.isRightWheel,
      },
    );
    this._state.changeDuration(intervalToDuration({start: info.dateFrom, end: info.dateTo}) as IDuration);
    this._state.changePrice(info.price);
    this._state.setAllStepsToTrue();
  }

  public cancelOrder() {
    this._state.resetEverything();
    this._router.navigate(['/order']);
    this._service.cancelOrder(this.id, this._state.getOrderInfo())
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
