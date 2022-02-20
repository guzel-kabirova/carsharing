import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Slide} from '../../../landing-page/landing-page.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
  @Input()
  slides?: Slide[];

  public currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public increaseCurrentSlide() {
    if (this.slides) {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
        return;
      }
      this.currentSlide ++;
    }
  }

  public decreaseCurrentSlide() {
    if (this.slides) {
      if (this.currentSlide === 0) {
        this.currentSlide = this.slides.length - 1;
        return;
      }
      this.currentSlide --;
    }
  }

}
