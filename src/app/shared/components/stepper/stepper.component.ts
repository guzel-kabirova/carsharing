import { Component, ChangeDetectionStrategy } from '@angular/core';
import {STEPS} from '../../../CONST';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {
  public steps = STEPS;
  constructor() { }
}
