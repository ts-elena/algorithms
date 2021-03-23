import { countAllPossibleWaysWith1StepIn3Directions } from "./countAllPossibleWaysWith1StepIn3Directions";

it.each([[4, 3, 129]])(
    "Find number of ways to pass matrix 1 step at a time (down/right)",
    (
      horizontalScalePoint: number,
      verticalScalePoint: number,
      expectedResult: number
    ) => {
      const actualResult = countAllPossibleWaysWith1StepIn3Directions(
        horizontalScalePoint,
        verticalScalePoint
      );
      expect(actualResult).toEqual(expectedResult);
    }
  );