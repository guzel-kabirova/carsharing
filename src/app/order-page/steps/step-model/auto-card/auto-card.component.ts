import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CarModel} from '../step-model.interface';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCardComponent {
  @Input()
  car?: CarModel;

  constructor() { }
}
