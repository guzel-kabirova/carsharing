import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

interface IRadioButton {
  id: string;
  name: string;
}

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  @Input()
  item?: IRadioButton;

  @Output()
  changeRadioBtn = new EventEmitter<string>();

  @Input()
  groupName = '';

  @Input()
  checked = false;

  constructor() { }
}
