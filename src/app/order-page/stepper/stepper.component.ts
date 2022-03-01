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
  activeStep = 0;

  @Input()
  stepsState = STEPS_STATE_INITIAL;

  @Output()
  changeStep = new EventEmitter<number>();

  public steps = STEPS;

  constructor() { }
}
