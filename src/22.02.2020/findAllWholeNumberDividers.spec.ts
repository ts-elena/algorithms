import { findAllWholeNumberDividers } from "./findAllWholeNumberDividers";

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
