import { On } from './On';

export interface Properties {
  [key: string]: any;
  on?: On;
  style?: Partial<ElementCSSInlineStyle['style']>;
}
