import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StepsStateService} from '../../steps/services/steps.state.service';
import {Tariff} from '../../steps/step-extra/step-extra.enum';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoListComponent {
  public state$ = this._state.stepsState$;
  public location$ = this._state.location$;
  public carModel$ = this._state.carModel$;
  public extraFields$ = this._state.extraFields$;
  public tariff = Tariff;

  constructor(private _state: StepsStateService) { }
}
