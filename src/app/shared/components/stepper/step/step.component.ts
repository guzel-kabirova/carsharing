import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input()
  stepText = '';
  @Input()
  isLast = false;

  constructor() { }
}
