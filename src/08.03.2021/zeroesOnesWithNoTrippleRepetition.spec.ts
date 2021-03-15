import { zeroesOnesWithNoTrippleRepetition } from "./zeroesOnesWithNoTrippleRepetition";

it.each([
  [1, 2],
  [2, 4],
  [3, 6],
  [4, 10],
  [5, 16],
])(
  "zeroesOnesWithNoTrippleRepetition",
  (sequenceLength: number, numberOfSequencesWithout11: number) => {
    const actualResult = zeroesOnesWithNoTrippleRepetition(sequenceLength);
    expect(actualResult).toEqual(numberOfSequencesWithout11);
  }
);
