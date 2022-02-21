import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-landing-info',
  templateUrl: './landing-info.component.html',
  styleUrls: ['./landing-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingInfoComponent {
  constructor() {
  }
}
