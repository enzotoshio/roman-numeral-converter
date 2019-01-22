const romanNumeralsEnum = require('../enum/roman-numerals');

const titulusBreakPoint = 3999;
const titulusSymbol = '^_';

function convertToRoman(number) {
  const minValue = 1;
  const maxValue = 3999999;

  if (
    number < minValue ||
    number > maxValue ||
    Number.isNaN(parseInt(number, 10))
  )
    throw new Error('Invalid value');

  let romanNumeral = '';
  let rest = number;

  for (const numeral of Object.keys(romanNumeralsEnum)) {
    if (rest <= 0) break;

    const hasTitulus = rest > titulusBreakPoint;

    if (hasTitulus) {
      const titulusIntegerNumber = Math.floor(rest * 0.001);
      const regex = new RegExp(
        `${Object.keys(romanNumeralsEnum).join('|')}`,
        'g'
      );

      rest -= titulusIntegerNumber * 1000;
      romanNumeral = `${convertToRoman(titulusIntegerNumber)
        .match(regex)
        .join(titulusSymbol)}${titulusSymbol}`;
    }

    const quotient = Math.floor(rest / romanNumeralsEnum[numeral]);

    rest -= quotient * romanNumeralsEnum[numeral];
    romanNumeral = `${romanNumeral}${numeral.repeat(quotient)}`;
  }

  return romanNumeral;
}

module.exports = convertToRoman;
