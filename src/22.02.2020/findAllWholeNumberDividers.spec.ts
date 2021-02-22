import {
  findAllWholeNumberDividers,
  findAllWholeNumberDividersVariantTwo,
} from "./findAllWholeNumberDividers";

it.each([
  [15, [1, 3, 5, 15]],
  [20, [1, 2, 4, 5, 10, 20]],
])(
  "Find difference between the smallest and the biggest array number",
  (num: number, dividers: number[]) => {
    const actualResult = findAllWholeNumberDividers(num);
    expect(actualResult).toEqual(dividers);
  }
);

it.each([
  [-15, [1, 3, 5, 15]],
  [15, [1, 3, 5, 15]],
  [20, [1, 2, 4, 5, 10, 20]],
])(
  "Var 2: Find difference between the smallest and the biggest array number",
  (num: number, dividers: number[]) => {
    const actualResult = findAllWholeNumberDividersVariantTwo(num);
    const doArraysMatch =
      dividers.every((d) => actualResult.indexOf(d) !== -1) &&
      dividers.length === actualResult.length;
    expect(doArraysMatch).toBeTruthy();
  }
);
