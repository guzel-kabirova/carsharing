import {ILocation, TStepsState} from './steps.interface';
import {CarModel} from './step-model/step-model.interface';
import {IDuration, IExtraFields} from './step-extra/step-extra.interface';

export const NO_LOCATION: ILocation = {
  city: '',
  pointOfIssue: '',
};

export const STEPS_STATE_INITIAL: TStepsState = [false, false, false, false];

export const NO_MODEL: CarModel = {
  id: '',
  name: '',
  number: '',
  priceMin: 0,
  priceMax: 0,
  isActive: false,
};

export const NO_EXTRA: IExtraFields = {
  color: '',
  dateFrom: [null, null],
  dateTo: [null, null],
  tariff: '',
  fullTank: false,
  babyChair: false,
  rightHand: false,
};

export const ZERO_DURATION: IDuration = {
  days: 0,
  hours: 0,
  minutes: 0,
  months: 0,
  seconds: 0,
  years: 0,
};
