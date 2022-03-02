import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {IModelType} from '../../../order-page/steps/steps.interface';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  @Input()
  item?: IModelType;

  constructor() { }
}
