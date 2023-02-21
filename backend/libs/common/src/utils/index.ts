const util = require('util');
export const detailedLog = (data) => {
  console.log(util.inspect(data, false, null, true));
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}