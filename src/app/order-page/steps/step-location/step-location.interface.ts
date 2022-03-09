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
  address = '';
  city = '';
  name = '';

  constructor(data: IPointOfIssueDto) {
    this.address = data.address;
    this.city = data.cityId.name;
    this.name = data.name;
  }
}
