import { fib } from "./fibonacci";

test("fibonacci numbers", () => {
  let fibonacciNums = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144,
    233,
    377,
    610,
    987,
    1597,
    2584,
    4181,
    6765,
    10946,
    17711,
  ];

  fibonacciNums.forEach((value: number, index: number) => {
    const result = fib(index);
    expect(result).toEqual(value);
  });
});
