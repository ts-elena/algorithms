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
