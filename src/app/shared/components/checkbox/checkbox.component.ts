import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

interface ICheckbox {
  id: string;
  name: string;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input()
  public item?: ICheckbox;

  @Output()
  changeCheckbox = new EventEmitter<string>();

  constructor() { }
}
