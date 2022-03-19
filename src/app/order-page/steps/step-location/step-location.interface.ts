export interface ICityDto {
  name: string;
}

export interface IPointOfIssueDto {
  address: string;
  cityId: ICity;
  id: string;
  name: string;
}

export interface ICity {
  id: string;
  name: string;
}

export class PointsOfIssueModel {
  id = '';
  address = '';
  city = '';
  name = '';

  constructor(data: IPointOfIssueDto) {
    this.id = data.id;
    this.address = data.address;
    this.city = data.cityId.name;
    this.name = data.name;
  }
}

export interface IPointWithCoordinate {
  id: string;
  address: string;
  city: string;
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
