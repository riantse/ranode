import { On } from './On';

export function addEventListeners(
  properties: {
    on?: On;
  },
  element: HTMLElement
) {
  const { on = {}, ...rest } = properties;
  Object.keys(on).forEach(key => {
    const handler = on[key];
    if (Array.isArray(handler)) {
      handler.forEach(fn => element.addEventListener(key, fn));
    } else element.addEventListener(key, handler);
  });
  return rest;
}
