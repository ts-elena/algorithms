export const zeroOneTwoSequenceWithout11 = (sequenceLength: number): number => {
  let zeroes = [0, 1];
  let ones = [0, 1];
  let deuces = [0, 1];

  for (let i = 2; i <= sequenceLength; i++) {
    zeroes[i] = zeroes[i - 1] + ones[i - 1] + deuces[i - 1];
    ones[i] = zeroes[i] - ones[i - 1];
    deuces[i] = zeroes[i - 1] + ones[i - 1] + deuces[i - 1];
  }

  return zeroes[sequenceLength] + ones[sequenceLength] + deuces[sequenceLength];
};
