import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

import {StepsStateService} from './steps/services/steps.state.service';
import {Step} from './order-page.enum';
import {StepModelApiService} from './steps/step-model/services/step-model.api.service';
import {DestroyService} from '../shared/services/destroy.service';
import {PreloaderService} from '../shared/components/preloader/preloader.service';
import {StepExtraApiService} from './steps/step-extra/services/step-extra.api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class OrderPageComponent implements OnInit {
  public step = Step;
  public activeStep = this.step.Location;
  public stepsState = this._steps.stepsState$;

  constructor(
    @Inject(DestroyService) private destroy$: Observable<void>,
    private _steps: StepsStateService,
    private _apiModel: StepModelApiService,
    private _preloader: PreloaderService,
    private _apiExtra: StepExtraApiService,
  ) { }

  ngOnInit(): void {
    this._preloader.loadingOn();
    this._apiModel.getCars()
      .pipe(takeUntil(this.destroy$), tap(() => this._preloader.loadingOff()))
      .subscribe();
    this._apiExtra.getTariffs()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public changeContent(step: number) {
    if (step < 4) {
      this._steps.changeActiveStep(step);
      this.activeStep = step;
      return;
    }
  }
}
