const romanNumeralConverter = require('./roman-numerals-converter');

describe('romanNumeralConverter', () => {
  describe('when not receiving a parameter', () => {
    it('returns an exception', () => {
      expect(romanNumeralConverter()).toThrow();
    });
  });

  describe('when not receiving a number', () => {
    it('returns an exception', () => {
      expect(romanNumeralConverter('test')).toThrow();
    });
  });

  describe('when receiving a number above 3.999.999', () => {
    it('returns an exception', () => {
      expect(romanNumeralConverter(3999999)).toThrow();
    });
  });

  describe('when receiving a number below 0', () => {
    it('returns an exception', () => {
      expect(romanNumeralConverter(0)).toThrow();
    });
  });

  describe('when receiving a number above 3.999', () => {
    it('returns the correct numeral with a titulus', () => {
      expect(romanNumeralConverter(4999)).toBe('IV^_CMXCIX');
    });
  });

  describe('when receiving a number below or equal 3.999', () => {
    it('returns the correct numeral', () => {
      expect(romanNumeralConverter(3999)).toBe('MMMCMXCIX');
    });
  });

  describe('when receiving a number that represents four times a unit', () => {
    it('returns a composed numeral instead of repeating four times', () => {
      expect(romanNumeralConverter(4)).toBe('IV');
    });
  });

  describe('when receiving a number that represents three times a unit', () => {
    it('returns a composed numeral instead of repeating four times', () => {
      expect(romanNumeralConverter(3)).toBe('III');
    });
  });
});
