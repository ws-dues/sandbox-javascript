function calculateAxisStepValue(maxChartValue) {
  if(typeof maxChartValue !== 'number') {
    throw new Error('Invalid maxChartValue for calculateAxisStepValue - maxChartValue must be a number.');
  }

  if(maxChartValue > 100) {
    return 20;
  }

  return 10;
}

module.exports = { calculateAxisStepValue };
