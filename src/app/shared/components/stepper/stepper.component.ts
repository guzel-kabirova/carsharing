import {Component, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {STEPS} from '../../../CONST';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {

  @Input()
  activeStep = 0;

  @Output()
  stepChanged = new EventEmitter<number>();

  public steps = STEPS;

  constructor() { }

  public changeStep(step: number) {
    this.stepChanged.emit(step);
  }
}
