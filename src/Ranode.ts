import { Properties } from './Properties';

export type Ranode = [
  string | HTMLElement,
  Properties?,
  ...Array<string | number | Ranode>
];
