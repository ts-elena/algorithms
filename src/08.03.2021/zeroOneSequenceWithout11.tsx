const zeroOneSequenceWithout11 = (sequenceLength: number): number => {
  let zero = [0, 1];
  let one = [0, 1];

  for (let i = 2; i <= sequenceLength; i++) {
    zero[i] = zero[i - 1] + one[i - 2];
    one[i] = zero[i - 1];
  }

  return zero[sequenceLength] + one[sequenceLength];
};
