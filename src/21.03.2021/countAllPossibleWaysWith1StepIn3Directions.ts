export const countAllPossibleWaysWith1StepIn3Directions = (
  horizontalScalePoint: number,
  verticalScalePoint: number
) => {
  const matrix: Array<number[]> = [];
  for (let i = 0; i <= verticalScalePoint; i++) {
    const currentRow: number[] = [];

    for (let j = 0; j <= horizontalScalePoint; j++) {
      if (i === 0 || j === 0) {
        currentRow.push(1);
        continue;
      }

      currentRow.push(
        currentRow[j - 1] + matrix[i - 1][j] + matrix[i - 1][j - 1]
      );
    }

    matrix.push(currentRow);
  }
  return matrix[verticalScalePoint][horizontalScalePoint];
};
