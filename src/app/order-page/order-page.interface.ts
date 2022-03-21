import {ICarsDto} from './steps/step-model/step-model.interface';
import {IPointOfIssue} from './steps/step-location/step-location.interface';

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

export interface IOrderResponse {
  carId: ICarsDto;
  cityId: INameWithId;
  color: string;
  dateFrom: number;
  dateTo: number;
  id: string;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  orderStatusId: INameWithId;
  pointId: Omit<IPointOfIssue, 'cityId'>;
  price: number;
  rateId: INameWithId;
}
