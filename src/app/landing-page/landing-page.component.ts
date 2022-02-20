import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {Slide} from './landing-page.interface';

const SLIDES: Slide[] = [
  {
    picture: {src: '../../../assets/pictures/parking.jpg', alt: 'parking'},
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    btnColor: 'linear-gradient(to right, #13493F, #0C7B1B)'
  },
  {
    picture: {src: '../../../assets/pictures/insurance.jpg', alt: 'insurance'},
    title: 'Страховка',
    text: 'Полная страховка автомобиля',
    btnColor: 'linear-gradient(to right, #132949, #0C7B67)'
  },{
    picture: {src: '../../../assets/pictures/petrol.jpg', alt: 'petrol'},
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    btnColor: 'linear-gradient(to right, #493013, #7B0C3B)'
  },{
    picture: {src: '../../../assets/pictures/service.jpg', alt: 'service'},
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    btnColor: 'linear-gradient(to right, #281349, #720C7B)'
  },
]

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  slides: Slide[] = SLIDES;

  constructor() { }

  ngOnInit(): void {
  }

}
