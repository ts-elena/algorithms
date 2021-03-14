export const findAllWholeNumberDividers = (num: number): number[] => {
  const dividers: number[] = [];
  for (let i: number = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};

// Сложность O(sqrt(n))
export const findAllWholeNumberDividersVariantTwo = (num: number): number[] => {
  num = Math.abs(num);
  const dividers: number[] = [];
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      num / i === i ? dividers.push(i) : dividers.push(i, num / i);
    }
  }
  return dividers;
};
