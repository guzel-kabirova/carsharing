import {ILocation, TStepsState} from './steps.interface';
import {ICarModel} from './step-model/step-model.interface';

export const NO_LOCATION: ILocation = {
  city: '',
  pointOfIssue: '',
};

export const STEPS_STATE_INITIAL: TStepsState = [false, false, false, false];

export const NO_MODEL: ICarModel = {
  id: '',
  name: '',
  number: '',
};
