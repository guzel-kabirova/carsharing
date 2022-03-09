import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ISlide} from '../landing-page.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input()
  public slides: ISlide[] = [];

  public currentSlide = 0;

  constructor() { }

  public increaseCurrentSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : ++this.currentSlide;
  }

  public decreaseCurrentSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : --this.currentSlide;
  }
}
