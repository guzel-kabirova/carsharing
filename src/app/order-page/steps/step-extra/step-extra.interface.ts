export interface IExtraFields {
  color: string,
  dateFrom: string,
  dateTo: string,
  tariff: string,
  fullTank?: boolean,
  babyChair?: boolean,
  rightHand?: boolean,
}

export type TDateFieldName = 'dateFrom' | 'dateTo'
