import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-stepper-arrow',
  templateUrl: './stepper-arrow.component.html',
  styleUrls: ['./stepper-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperArrowComponent {
  constructor() { }
}
