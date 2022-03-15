import {TuiDay, TuiTime} from '@taiga-ui/cdk';

export interface IExtraFields {
  color: string;
  dateFrom: [TuiDay, TuiTime] | null;
  dateTo: [TuiDay, TuiTime] | null;
  tariff: string;
  fullTank?: boolean;
  babyChair?: boolean;
  rightHand?: boolean;
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
