import {CarModel} from '../step-model/step-model.interface';
import {IExtraFields} from '../step-extra/step-extra.interface';

export interface IViewStepFinal {
  carModel: CarModel,
  extraFields: IExtraFields,
}
