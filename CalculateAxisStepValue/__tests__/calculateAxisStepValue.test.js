const { calculateAxisStepValue } = require('../calculateAxisStepValue');

describe('calculateAxisStepValue', () => {
  it('returns 10, when given 100', () => {
    const result = calculateAxisStepValue(100);

    expect(result).toEqual(10);
  });
});
