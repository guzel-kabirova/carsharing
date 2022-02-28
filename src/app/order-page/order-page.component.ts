import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StepsService} from './steps/steps.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPageComponent {
  public activeStep = 0;
  public stepsState = this._steps.stepsState$;

  constructor(private _steps: StepsService) { }

  public changeContent(step: number) {
    this.activeStep = step;
  }
}
