import {Component, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  @HostBinding('style.width')
  width = '';

  constructor() { }
}
