export const findAllWholeNumberDividers = (num: number): number[] => {
  const dividers: number[] = [];
  for (let i: number = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};
