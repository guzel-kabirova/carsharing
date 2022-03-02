import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoListComponent {
  @Input()
  itemList: string[] = [];

  constructor() { }
}
