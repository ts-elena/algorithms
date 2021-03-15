// Сложность O(nlog n) в соответствии со сложностью .sort() в js, тк это quickSort

export const maxMinValueDiffOfNumArray = (arr: number[]): number => {
  arr.sort((a: number, b: number) => compare(a, b));
  const lastElementIndex = arr.length - 1;
  return arr[lastElementIndex] - arr[0];
};

function compare(a: number, b: number) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// Сложность O(N)
export const maxMinValueDiffOfNumArraySecondVariant = (
  arr: number[]
): number => {
  let maxValue: number = arr[0];
  let minValue: number = arr[0];

  arr.forEach((value) => {
    if (value < minValue) {
      minValue = value;
    }
    if (value > maxValue) {
      maxValue = value;
    }
  });

  return maxValue! - minValue!;
};
