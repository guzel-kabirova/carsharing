import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input()
  stepIndex?: number;
  @Input()
  stepText = '';
  @Input()
  isLast = false;

  @Output()
  stepChanged = new EventEmitter<number>();

  constructor() { }

  public changeStep() {
    this.stepChanged.emit(this.stepIndex);
  }
}
