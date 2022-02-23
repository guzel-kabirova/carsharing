import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'input[app-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {

  constructor() { }
}
