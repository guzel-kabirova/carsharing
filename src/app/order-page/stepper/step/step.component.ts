import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

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

  @Input()
  isActive = false;

  @Input()
  isCompleted = false;

  @Input()
  isDisabled = true;

  @Output()
  change = new EventEmitter<number>();

  constructor() { }
}
