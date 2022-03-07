import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetComponent {
  @Input()
  value = '';

  constructor() { }
}
