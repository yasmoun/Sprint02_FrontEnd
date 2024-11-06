import { Exposition } from './exposition.model';
export class ExpositionWrapper {
  _embedded!: { expositions: Exposition[] };
}
