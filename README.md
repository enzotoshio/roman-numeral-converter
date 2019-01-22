This project is intended to convert integer numbers to roman numeral via command line, it's conversion accepts number between 1 and 3.999.999, after the value 3.999 it implements a conversion based in the one of the ways big romans numerals were used, applying a titulus (vinculum, a dash over the numeral) to represent numerals multiplied by 1000 (because of the output encode it's used the mathematical representation: `^_`), what enables to write numerals higher than 3.999 witout exceding the limit of three of the same character.

It uses node to run (it's folder architecture is layer based) and jest to test.
It's code quality is guaranteed throught prettier and eslint (Airbnb).

## Available Scripts

In the project directory, you can:

### Install the project dependencies

```sh
npm i
```

### Run the project

```sh
npm start
```

### Run the tests

```sh
npm t
```

### Get the test coverage

```sh
npm test -- --coverage
```
