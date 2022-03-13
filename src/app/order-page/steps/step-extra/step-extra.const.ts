export const COLORS = [
  {id: 'all', name: 'Любой'},
  {id: 'red', name: 'Красный'},
  {id: 'blue', name: 'Голубой'},
];

export const TARIFFS = [
  {id: 'minute', name: 'Поминутно, 7₽/мин'},
  {id: 'day', name: 'На сутки, 1999 ₽/сутки'},
];

export const SERVICES = [
  {id: 'fullTank', name: 'Полный бак, 500р'},
  {id: 'babyChair', name: 'Детское кресло, 200р'},
  {id: 'rightHand', name: 'Правый руль, 1600р'},
];

export const DATE_REGEX = new RegExp('^(\\d{2}).(\\d{2}).(\\d{4}) (\\d{2}):(\\d{2})$')
