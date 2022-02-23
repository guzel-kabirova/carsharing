import {Slide} from './landing-page/landing-page.interface';

export const SLIDES: Slide[] = [
  {
    picture: {src: './assets/pictures/parking.jpg', alt: 'parking'},
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    btnColor: 'linear-gradient(to right, #13493F, #0C7B1B)',
  },
  {
    picture: {src: './assets/pictures/insurance.jpg', alt: 'insurance'},
    title: 'Страховка',
    text: 'Полная страховка автомобиля',
    btnColor: 'linear-gradient(to right, #132949, #0C7B67)',
  },
  {
    picture: {src: './assets/pictures/petrol.jpg', alt: 'petrol'},
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    btnColor: 'linear-gradient(to right, #493013, #7B0C3B)',
  },
  {
    picture: {src: './assets/pictures/service.jpg', alt: 'service'},
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    btnColor: 'linear-gradient(to right, #281349, #720C7B)',
  },
];

export const NAV_LINKS: string[] = ['Парковка', 'Страховка', 'Бензин', 'Обслуживание'];
export const NAV_SOCIAL_ICONS: string[] = ['social-telegram', 'social-facebook', 'social-instagram'];

export const STEPS: string[] = ['Местоположение', 'Модель', 'Дополнительно', 'Итого'];
export const ORDER_INFO_LIST: string[] = ['Пункт выдачи', 'Модель', 'Цвет', 'Длительность аренды', 'Тариф', 'Полный бак'];
