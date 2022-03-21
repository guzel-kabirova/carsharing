import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StepsStateService} from '../services/steps.state.service';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IViewStepFinal} from './step-final.interface';

@Component({
  selector: 'app-step-final',
  templateUrl: './step-final.component.html',
  styleUrls: ['./step-final.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepFinalComponent {
  public view$: Observable<IViewStepFinal> = combineLatest([this._state.carModel$, this._state.extraFields$])
    .pipe(map(([carModel, extraFields]) => ({carModel, extraFields})));

  constructor(private _state: StepsStateService) { }
}
