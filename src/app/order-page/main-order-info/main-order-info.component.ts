import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

import {StepsStateService} from '../steps/services/steps.state.service';
import {Step} from '../order-page.enum';

@Component({
  selector: 'app-main-order-info',
  templateUrl: './main-order-info.component.html',
  styleUrls: ['./main-order-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainOrderInfoComponent {
  public state$ = this._state.stepsState$;
  public activeStep$ = this._state.activeStep$;
  public step = Step;
  public carModel$ = this._state.carModel$;

  @Output()
  changeStep = new EventEmitter<number>();

  constructor(private _state: StepsStateService) { }
}
