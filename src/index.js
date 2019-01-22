/* eslint-disable no-console */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const convertToRoman = require('./service/roman-numerals-converter');

readline.question(`Input an integer number to convert:\n\n`, number => {
  try {
    const romanNumeral = convertToRoman(number);

    console.log(`\n${romanNumeral}`);
  } catch (error) {
    console.log(`\n${number} is a invalid number!`);
  }

  readline.close();
});
