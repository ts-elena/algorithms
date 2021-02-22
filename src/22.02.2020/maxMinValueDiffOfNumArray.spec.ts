import {
  maxMinValueDiffOfNumArray,
  maxMinValueDiffOfNumArraySecondVariant,
} from "./maxMinValueDiffOfNumArray";

it.each([
  [[2, 3, 10, 50, 1], 49],
  [[8, 12, 3, 102, 50], 99],
  [[33, 17, 2, 2, -1], 34],
])(
  "Find difference between the smallest and the biggest array number",
  (array: number[], diff: number) => {
    const actualResult = maxMinValueDiffOfNumArray(array);
    expect(actualResult).toEqual(diff);
  }
);

it.each([
  [[2, 3, 10, 50, 1], 49],
  [[8, 12, 3, 102, 50], 99],
  [[33, 17, 2, 2, -1], 34],
])(
  "Find difference between the smallest and the biggest array number, second variant",
  (array: number[], diff: number) => {
    const actualResult = maxMinValueDiffOfNumArraySecondVariant(array);
    expect(actualResult).toEqual(diff);
  }
);
