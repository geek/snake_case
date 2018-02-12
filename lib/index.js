'use strict';

module.exports = (str) => {
  let result = '';
  let prev = str.charCodeAt(0);
  for (let i = 0; i < str.length; ++i) {
    const curr = str.charCodeAt(i);
    const next = str.charCodeAt(i + 1);
    // switching from lower to upper case
    if (prev > 96 && curr < 96 && curr !== 95) {
      result += '_';
    // upper upper lower case (CAMELCase => CAMEL_Case)
    } else if (prev < 96 && curr < 96 && next > 96 && curr !== 95) {
      result += '_';
    }
    result += str[i];
    prev = curr;
  }

  return result.toLowerCase();
};
