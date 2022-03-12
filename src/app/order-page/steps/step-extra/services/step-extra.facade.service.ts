import {Injectable} from '@angular/core';
import {StepsStateService} from '../../services/steps.state.service';

@Injectable({providedIn: 'root'})
export class StepExtraFacadeService {
  public state = this._state;

  constructor(private _state: StepsStateService) {}
}
