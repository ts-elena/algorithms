import { zeroOneTwoSequenceWithout11 } from "./zeroOneTwoSequenceWithout11";

it.each([
  [1, 3],
  [2, 8],
  [3, 22],
  [4, 60],
  [5, 164]
])(
  "zeroOneTwoSequenceWithout11",
  (sequenceLength: number, numberOfSequencesWithout11: number) => {
    const actualResult = zeroOneTwoSequenceWithout11(sequenceLength);
    expect(actualResult).toEqual(numberOfSequencesWithout11);
  }
);
