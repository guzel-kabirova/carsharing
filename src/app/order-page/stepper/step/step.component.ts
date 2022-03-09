import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input()
  public stepText = '';

  @Input()
  public isLast = false;

  @Input()
  public isActive = false;

  @Input()
  public isCompleted = false;

  @Input()
  public isDisabled = true;

  @Output()
  public change = new EventEmitter<void>();

  constructor() { }
}
