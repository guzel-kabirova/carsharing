import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-main-order-info',
  templateUrl: './main-order-info.component.html',
  styleUrls: ['./main-order-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainOrderInfoComponent {
  constructor() { }
}
