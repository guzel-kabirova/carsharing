import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StepsService} from './steps/steps.service';
import {Step} from './order-page.enum';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderPageComponent {
  public step = Step;
  public activeStep = this.step.Location;
  public stepsState = this._steps.stepsState$;

  constructor(private _steps: StepsService) { }

  public changeContent(step: number) {
    this.activeStep = step;
  }
}
