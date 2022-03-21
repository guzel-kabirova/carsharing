import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StepsStateService} from '../services/steps.state.service';

@Component({
  selector: 'app-step-final',
  templateUrl: './step-final.component.html',
  styleUrls: ['./step-final.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepFinalComponent {
  get name(): string {
    return this._state.getCarModel().name || '';
  }

  get number(): string {
    return this._state.getCarModel().number || '';
  }

  get pictureUrl(): string {
    return this._state.getCarModel().thumbnailUrl || '';
  }

  get tank(): string {
    return (this._state.getCarModel().tank || '') + '%';
  }

  get time(): string {
    return (this._state.getExtraFields().dateFrom[0] || '') + ' ' + (this._state.getExtraFields().dateFrom[1] || '');
  }

  constructor(private _state: StepsStateService) { }
}
