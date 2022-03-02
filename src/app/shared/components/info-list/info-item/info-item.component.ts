import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoItemComponent {
  @Input()
  key = '';

  constructor() { }
}
