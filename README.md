This project is intended to convert integer numbers to roman numeral via command line, it's conversion accepts number between 1 and 3.999.999, after the value 3.999 it implements a conversion based in the one of the ways big romans numerals were used, applying a titulus (vinculum, a dash over the numeral) to represent numerals multiplied by 1000 (because of the output encode it's used the mathematical representation: `^_`), what enables to write numerals higher than 3.999 witout exceding the limit of three of the same character.

It uses:

- node to run (it's folder architecture is layer based) because of it's simple implementation and the simplicity to achieve the desired interaction and requirements of receiving an input and returning an output.
- jest to test, because of it's simple configuration and bdd syntax.
- prettier and eslint (Airbnb) for code quality assurance.

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
