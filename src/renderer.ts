import { addEventListeners } from './addEventListeners';
import { setRecursive } from './setRecursive';
import { Ranode } from './Ranode';

export function renderer([
  stringOrElement,
  properties = {},
  children = [],
]: Ranode): HTMLElement {
  const element =
    stringOrElement instanceof HTMLElement
      ? stringOrElement
      : document.createElement(stringOrElement);

  properties = addEventListeners(properties, element);
  setRecursive(properties, element);

  children.forEach(child => {
    switch (typeof child) {
      case 'string':
      case 'number':
        element.appendChild(document.createTextNode(child.toString()));
        break;
      case 'undefined':
        return;
      default:
        element.appendChild(renderer.apply(null, [child]));
    }
  });

  return element;
}
