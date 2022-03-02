import {IModelType} from './steps/steps.interface';

export const STEPS: string[] = ['Местоположение', 'Модель', 'Дополнительно', 'Итого'];
export const ORDER_INFO_LIST: string[] = ['Пункт выдачи', 'Модель', 'Цвет', 'Длительность аренды', 'Тариф', 'Полный бак'];

export const MODEL_TYPES: IModelType[] = [
  {idName: 'all', text: 'Все модели'},
  {idName: 'economy', text: 'Эконом'},
  {idName: 'premium', text: 'Премиум'},
];
