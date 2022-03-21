import {CarModel} from './step-model/step-model.interface';
import {IDuration, IExtraFields} from './step-extra/step-extra.interface';

export interface ILocation {
  city: string | null;
  pointOfIssue: string | null;
}

export type TStepsState = [boolean, boolean, boolean, boolean, boolean];

export interface IModelType {
  idName: string;
  text: string;
}

export interface IViewInfoList {
  carModel: CarModel,
  extraFields: IExtraFields,
  duration: IDuration,
}
