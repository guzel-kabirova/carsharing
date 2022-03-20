import {INameWithId} from '../../order-page.interface';

export interface ICityDto {
  name: string;
}

export interface IPointOfIssue {
  address: string;
  cityId: INameWithId;
  id: string;
  name: string;
}

export interface IPointWithCoordinate {
  id: string;
  address: string;
  cityId: INameWithId;
  name: string;
  coordinate: ICoordinates;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IGeocoderResponse {
  response: {
    GeoObjectCollection: {
      featureMember: IGeoObject[];
    };
  };
}

export interface IGeoObject {
  GeoObject: {
    Point: {
      pos: string;
    };
  };
}
