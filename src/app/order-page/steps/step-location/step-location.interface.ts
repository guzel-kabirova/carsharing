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

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ICityPointsCoordinates {
  cityName: string;
  points: IPointCoordinates[];
}

export interface IPointCoordinates extends ICoordinates {
  id: string;
  address: string;
}
