export const fib = (n: number): number => {
  let next: number = 0;
  let prev: number = 1;
  for (let i: number = 0; i <= n; i++) {
    next = prev + next;
    prev = next - prev;
  }
  return prev;
};
