import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Slide} from './landing-page.interface';
import {SLIDES} from './landing-page.const';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  slides: Slide[] = SLIDES;

  constructor() { }
}
