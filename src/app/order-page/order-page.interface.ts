export interface IResponse<T> {
  data: T[];
}

export interface IOrderRequest {
  orderStatusId: INameWithId,
  cityId: INameWithId;
  pointId: INameWithId;
  carId: INameWithId;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: INameWithId;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export interface INameWithId {
  name: string;
  id: string;
}

export interface IOrderRequestWithId extends IOrderRequest {
  id: string;
}
