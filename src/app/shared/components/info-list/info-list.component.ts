import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {StepsStateService} from '../../../order-page/steps/services/steps.state.service';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoListComponent {
  @Input()
  itemList: string[] = [];

  public state$ = this._state.stepsState$;
  public location$ = this._state.location$;

  constructor(private _state: StepsStateService) { }
}
