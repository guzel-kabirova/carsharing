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

export interface MapEvent {
  coords: Coordinates;
}

export interface Coordinates {
  lat: number,
  lng: number
}

export interface CityPointsCoordinates {
  cityName: string;
  points: PointCoordinates[];
}

export interface PointCoordinates extends Coordinates {
  id: string;
  address: string;
}
