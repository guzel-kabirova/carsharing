import {CityPointsCoordinates} from './step-location.interface';

export const COORDINATES: CityPointsCoordinates[] = [
  {
    cityName: 'Уфа',
    points: [{id: '60bb074b2aed9a0b9b82fc71', address: 'ул. Чернышевского, д. 88', lat: 54.820480, lng: 56.122720}],
  },
  {
    cityName: 'Краснодар',
    points: [{id: '6114630f2aed9a0b9b850806', address: 'ул. Монтажников, 10/2', lat: 45.059360, lng: 38.965330}],
  },
  {
    cityName: 'Санкт-Петербург',
    points: [{id: '615ae47018f5c2264119b939', address: '56 Литейный проспект', lat: 59.934000, lng: 30.351470}],
  },
  {
    cityName: 'Ростов-на-Дону',
    points: [{id: '61a391e605c99b2812794f1c', address: 'ул. Большая Садовая, 47', lat: 47.221390, lng: 39.712280}],
  },
  {
    cityName: 'Екатеринбург',
    points: [{id: '61adef6bbb7a006c05c54a8a', address: 'ул. Уральских рабочих, 72', lat: 56.897870, lng: 60.593740}],
  },
  {
    cityName: 'Ульяновск',
    points: [{id: '61b310cfbb7a006c05c54e2c', address: 'Льва Толстого 62', lat: 54.320329, lng: 48.430147}],
  },
];


export const DEFAULT_COORDINATES = {
  lat: 54.320329,
  lng: 48.430147,
};
