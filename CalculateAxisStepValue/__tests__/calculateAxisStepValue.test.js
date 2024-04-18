const { calculateAxisStepValue } = require('../calculateAxisStepValue');

describe('calculateAxisStepValue', () => {
  it('throws an error, when given a string', () => {
    expect(() =>  calculateAxisStepValue(' ')).toThrow();
  });

  it('returns 10, when given 100', () => {
    const result = calculateAxisStepValue(100);

    expect(result).toEqual(10);
  });

  it('returns 20, when given 200', () => {
    const result = calculateAxisStepValue(200);

    expect(result).toEqual(20);
  });
});
