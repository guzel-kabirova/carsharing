import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogConfirmComponent {
  @Output()
  public cancelEvent = new EventEmitter();
  @Output()
  public confirmEvent = new EventEmitter();

  constructor() { }
}
