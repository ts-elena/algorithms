import { countAllPossibleWaysWith1StepAtTime } from "./countAllPossibleWaysWith1StepAtTime";

it.each([[4, 5, 126]])(
  "Find number of ways to pass matrix 1 step at a time (down/right)",
  (
    horizontalScalePoint: number,
    verticalScalePoint: number,
    expectedResult: number
  ) => {
    const actualResult = countAllPossibleWaysWith1StepAtTime(
      horizontalScalePoint,
      verticalScalePoint
    );
    expect(actualResult).toEqual(expectedResult);
  }
);
