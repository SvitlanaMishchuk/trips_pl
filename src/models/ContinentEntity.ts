import { SubregionEntity } from './SubregionEntity';

export interface ContinentEntity {
  id: string;
  name: string;
  region: string;
  subregions: Array<SubregionEntity>;
}
