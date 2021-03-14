import { zeroOneSeqWithNoTrippleOnes } from "./zeroOneSeqWithNoTrippleOnes";
it.each([
  [1, 2],
  [2, 4],
  [3, 7],
  [4, 13],
  [5, 25],
])(
  "zeroOneSeqWithNoTrippleOnes",
  (sequenceLength: number, expectedNumberOfSequences: number) => {
    const actualResult = zeroOneSeqWithNoTrippleOnes(sequenceLength);
    expect(actualResult).toEqual(expectedNumberOfSequences);
  }
);
