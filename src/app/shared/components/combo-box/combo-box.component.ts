import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent {
  @Input()
  items: readonly string[] = [];

  constructor() { }
}
