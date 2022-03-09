import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {STEPS} from '../order-page.const';
import {STEPS_STATE_INITIAL} from '../steps/steps.initial';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  @Input()
  public activeStep = 0;

  @Input()
  public stepsState = STEPS_STATE_INITIAL;

  @Output()
  public changeStep = new EventEmitter<number>();

  public steps = STEPS;

  constructor() { }
}
