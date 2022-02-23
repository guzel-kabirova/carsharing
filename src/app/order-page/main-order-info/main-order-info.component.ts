import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ORDER_INFO_LIST} from '../../CONST';

@Component({
  selector: 'app-main-order-info',
  templateUrl: './main-order-info.component.html',
  styleUrls: ['./main-order-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainOrderInfoComponent {
  public itemList: string[] = ORDER_INFO_LIST;

  constructor() { }
}
