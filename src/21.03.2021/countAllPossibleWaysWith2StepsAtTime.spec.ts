import { countAllPossibleWaysWith2StepsAtTime } from "./countAllPossibleWaysWith2StepsAtTime";

it.each([[5, 2, 149]])(
    "Find number of ways to pass matrix 1 step at a time (down/right)",
    (
      horizontalScalePoint: number,
      verticalScalePoint: number,
      expectedResult: number
    ) => {
      const actualResult = countAllPossibleWaysWith2StepsAtTime(
        horizontalScalePoint,
        verticalScalePoint
      );
      expect(actualResult).toEqual(expectedResult);
    }
  );