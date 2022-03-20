import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-confirmed-order-page',
  templateUrl: './confirmed-order-page.component.html',
  styleUrls: ['./confirmed-order-page.component.scss', '../order-page/order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmedOrderPageComponent {
}
