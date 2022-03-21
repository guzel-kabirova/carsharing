export interface ILocation {
  city: string | null;
  pointOfIssue: string | null;
}

export type TStepsState = [boolean, boolean, boolean, boolean, boolean];

export interface IModelType {
  idName: string;
  text: string;
}
