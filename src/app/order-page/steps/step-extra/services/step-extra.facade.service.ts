import {Injectable} from '@angular/core';

import {StepsStateService} from '../../services/steps.state.service';
import {IDuration, IExtraFields} from '../step-extra.interface';

@Injectable({providedIn: 'root'})
export class StepExtraFacadeService {
  public state = this._state;

  constructor(private _state: StepsStateService) {}

  changeExtraField(value: IExtraFields) {
    this._state.changeExtraField(value);
  }

  changeDuration(duration: IDuration) {
    this._state.changeDuration(duration);
  }
}
