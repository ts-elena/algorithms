export const zeroOneSeqWithNoTrippleOnes = (sequenceLength: number): number => {
  let zero = [0, 1];
  let one = [0, 1];

  for (let i = 2; i <= sequenceLength; i++) {
    if (i === 2) {
      zero[i] = 2;
      one[i] = 2;
      continue;
    }
    zero[i] = zero[i - 1] + one[i - 1];
    one[i] = zero[i] - 1;
  }

  return zero[sequenceLength] + one[sequenceLength];
};
