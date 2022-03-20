import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

import {StepsStateService} from './steps/services/steps.state.service';
import {Step} from './order-page.enum';
import {StepModelApiService} from './steps/step-model/services/step-model.api.service';
import {DestroyService} from '../shared/services/destroy.service';
import {PreloaderService} from '../shared/components/preloader/preloader.service';
import {StepExtraApiService} from './steps/step-extra/services/step-extra.api.service';
import {RefDialogDirective} from '../shared/directives/ref-dialog.directive';
import {StepFinalApiService} from './steps/step-final/services/step-final.api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class OrderPageComponent implements OnInit {
  @ViewChild(RefDialogDirective)
  public appRefDialog!: RefDialogDirective;

  public step = Step;
  public activeStep = this.step.Location;
  public stepsState = this._steps.stepsState$;

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _steps: StepsStateService,
    private _apiModel: StepModelApiService,
    private _preloader: PreloaderService,
    private _apiExtra: StepExtraApiService,
    private _apiFinal: StepFinalApiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._preloader.loadingOn();
    this._apiModel.getCars()
      .pipe(takeUntil(this.destroy$), tap(() => this._preloader.loadingOff()))
      .subscribe();
    this._apiExtra.getTariffs()
      .pipe(takeUntil(this.destroy$))
      .subscribe();

    this._apiFinal.getOrderStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public changeContent(step: number) {
    if (step < 4) {
      this._steps.changeActiveStep(step);
      this.activeStep = step;
      return;
    }

    this.appRefDialog.viewContainerRef.clear();
    const dialog = this.appRefDialog.createComponent();
    dialog.instance.cancelEvent.subscribe(() => this.appRefDialog.viewContainerRef.clear());
    dialog.instance.confirmEvent
      .pipe(
        switchMap(() => this._apiFinal.sendOrderInfo(this._steps.getOrderInfo())),
        tap(orderInfo => {
          this._router.navigate(['/order', orderInfo.id]);
        }),
      )
      .subscribe();
  }
}
