export const zeroOneSeqWithoutSetOnesRepetitions = (
  sequenceLength: number,
  maxNumOfRepetitions: number
): number => {
  let zero = [0, 1];
  let one = [0, 1];
  for (let i = 2; i <= sequenceLength; i++) {
    if (i === 2) {
      zero[i] = i;
      one[i] = i;
      continue;
    }
    if (i < maxNumOfRepetitions) {
      zero[i] = zero[i - 1] * 2;
      one[i] = zero[i];
      continue;
    }
    zero[i] = zero[i - 1] + one[i - 1];
    one[i] = zero[i] - 1;
  }

  return zero[sequenceLength] + one[sequenceLength];
};
