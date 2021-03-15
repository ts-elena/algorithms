export const lowestPriceToGetToStairWithNumber = (
  stairNum: number,
  stairPrices: number[]
): number => {
  const maxIndex = stairNum - 1;
  if (maxIndex === 0) {
    return stairPrices[0];
  }

  let finalPrice = 0;

  for (
    let nextStairIndex: number = 0;
    nextStairIndex <= maxIndex;
    nextStairIndex++
  ) {
    let priceInOneJump = stairPrices[nextStairIndex];
    let priceInTwoJumps = stairPrices[nextStairIndex + 1];

    if (nextStairIndex === maxIndex || priceInOneJump < priceInTwoJumps) {
      finalPrice += priceInOneJump;
    } else {
      nextStairIndex += 1;
      finalPrice += priceInTwoJumps;
    }
  }

  return finalPrice;
};
