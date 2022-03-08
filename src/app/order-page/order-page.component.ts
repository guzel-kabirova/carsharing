import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {StepsStateService} from './steps/services/steps.state.service';
import {Step} from './order-page.enum';
import {StepModelApiService} from './steps/step-model/services/step-model.api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPageComponent implements OnInit {
  public step = Step;
  public activeStep = this.step.Location;
  public stepsState = this._steps.stepsState$;

  constructor(
    private _steps: StepsStateService,
    private _api: StepModelApiService,
  ) { }

  ngOnInit(): void {
    this._api.getCars().subscribe();
  }

  public changeContent(step: number) {
    this._steps.changeActiveStep(step);
    this.activeStep = step;
  }
}
