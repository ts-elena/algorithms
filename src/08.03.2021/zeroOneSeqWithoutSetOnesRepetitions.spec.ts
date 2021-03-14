import { zeroOneSeqWithoutSetOnesRepetitions } from "./zeroOneSeqWithoutSetOnesRepetitions";

it.each([
  [1, 3, 2],
  [2, 3, 4],
  [3, 3, 7],
  [4, 4, 15],
  [5, 4, 29],
  [6, 4, 57],
])(
  "zeroOneSeqWithNoTrippleOnes",
  (
    sequenceLength: number,
    maxNumOfRepetitions: number,
    expectedNumberOfSequences: number
  ) => {
    const actualResult = zeroOneSeqWithoutSetOnesRepetitions(
      sequenceLength,
      maxNumOfRepetitions
    );
    expect(actualResult).toEqual(expectedNumberOfSequences);
  }
);
