export interface IExtraFields {
  color: string;
  dateFrom: string;
  dateTo: string;
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
