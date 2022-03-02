import {ILocation, TStepsState} from './steps.interface';

export const NO_LOCATION: ILocation = {
  city: null,
  pointOfIssue: null,
};

export const STEPS_STATE_INITIAL: TStepsState = [false, false, false, false];
