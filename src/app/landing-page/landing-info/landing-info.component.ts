import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-landing-info',
  templateUrl: './landing-info.component.html',
  styleUrls: ['./landing-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingInfoComponent {
  @Output()
  onOpenBtnClick = new EventEmitter();

  constructor() { }

  public showNav() {
    this.onOpenBtnClick.emit();
  }
}
