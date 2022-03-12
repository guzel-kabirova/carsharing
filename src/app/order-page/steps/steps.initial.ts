import {ILocation, TStepsState} from './steps.interface';
import {CarModel} from './step-model/step-model.interface';

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
