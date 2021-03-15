import { lowestPriceToGetToStairWithNumber } from "./stairs";

it.each([
  [3, [10, 3, 12, 9, 20, 40], 15],
  [4, [1, 1, 1, 1, 1, 1], 2],
  [4, [20, 1, 50, 1, 1, 1], 2],
  [7, [20, 1, 50, 50, 3, 6, 2, 9, 13], 56],
  [8, [20, 1, 50, 50, 3, 6, 2, 9, 13], 65],
])(
  "Staircase",
  (stairNumber: number, pricedStairs: number[], cheapestPrice: number) => {
    const actualResult = lowestPriceToGetToStairWithNumber(
      stairNumber,
      pricedStairs
    );
    expect(actualResult).toEqual(cheapestPrice);
  }
);
