import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-step-final',
  templateUrl: './step-final.component.html',
  styleUrls: ['./step-final.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepFinalComponent {
  constructor() { }
}
