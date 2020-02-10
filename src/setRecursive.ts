export function setRecursive(
  properties: {
    [key: string]: any;
  },
  target: any
) {
  const keys = Object.keys(properties);
  const rest: any = {};
  keys.forEach(key => {
    if (properties[key] instanceof Object) {
      setRecursive(properties[key], target[key]);
    } else rest[key] = properties[key];
  });
  Object.assign(target, rest);
}
