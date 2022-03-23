import {TuiDay, TuiTime} from '@taiga-ui/cdk';

import {INameWithId} from '../../order-page.interface';

export interface IExtraFields {
  color: string;
  dateFrom: [TuiDay | null, TuiTime | null];
  dateTo: [TuiDay | null, TuiTime | null];
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

export interface ITariff {
  id: string;
  price: number;
  rateTypeId: IRateType;
}

export interface IRateType extends INameWithId {
  unit: string;
}
