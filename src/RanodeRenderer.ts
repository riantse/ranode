import { addEventListeners } from './addEventListeners';
import { setRecursive } from './setRecursive';
import { Ranode } from './Ranode';

export function ranodeRenderer([
  stringOrElement,
  properties,
  ...children
]: Ranode) {
  const element =
    stringOrElement instanceof HTMLElement
      ? stringOrElement
      : document.createElement(stringOrElement);
  if (properties) {
    properties = addEventListeners(properties, element);
    setRecursive(properties, element);
  }
  children.forEach(child => {
    switch (typeof child) {
      case 'string':
      case 'number':
        element.appendChild(document.createTextNode(child.toString()));
        break;
      case 'undefined':
        return;
      default:
        element.appendChild(ranodeRenderer.apply(null, [child]));
        break;
    }
  });
  return element;
}
