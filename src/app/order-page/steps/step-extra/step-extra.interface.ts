import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {CarModel} from '../step-model/step-model.interface';

export interface IExtraFields {
  color: string;
  dateFrom: [TuiDay, TuiTime] | null;
  dateTo: [TuiDay, TuiTime] | null;
  tariff: string;
  fullTank: boolean;
  babyChair: boolean;
  rightHand: boolean;
}

export type TDateFieldName = 'dateFrom' | 'dateTo'

export interface IDuration {
  days: number;
  hours: number;
  minutes: number;
  months: number;
  seconds: number;
  years: number;
}


export interface IView {
  carModel: CarModel,
  extraFields: IExtraFields,
  duration: IDuration,
}

export interface ITariff {
  id: string;
  price: number;
  rateTypeId: IRateType;
}

export interface IRateType {
  name: string;
  unit: string;
}
