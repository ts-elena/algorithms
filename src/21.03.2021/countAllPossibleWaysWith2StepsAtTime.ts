export const countAllPossibleWaysWith2StepsAtTime = (
  horizontalScalePoint: number,
  verticalScalePoint: number
) => {
  const matrix: Array<number[]> = [];
  
  for (let i = 0; i <= verticalScalePoint; i++) {
    const currentRow: number[] = [];
    const {
      isIndexZeroRow: isIndexZeroVerticalRow,
      isIndexOneRow: isIndexOneVerticalRow,
      isNotAtFillingStages: isNotAtFillingStagesVertical,
    } = getAllowedStepsModel(i);

    for (let j = 0; j <= horizontalScalePoint; j++) {
      const {
        isIndexZeroRow: isIndexZeroHorizontalRow,
        isIndexOneRow: isIndexOneHorizontalRow,
        isNotAtFillingStages: isNotAtFillingStagesHorizontal,
      } = getAllowedStepsModel(j);

      if (isIndexZeroVerticalRow) {
        if (!isNotAtFillingStagesHorizontal) {
          currentRow.push(1);
          continue;
        }
        currentRow.push(currentRow[j - 2] + currentRow[j - 1]);
        continue;
      }

      if (isIndexOneVerticalRow) {
        if (isIndexZeroHorizontalRow) {
          currentRow.push(1);
          continue;
        }
        if (isIndexOneHorizontalRow) {
          currentRow.push(2);
          continue;
        }
        currentRow.push(
          matrix[i - 1][j] + currentRow[j - 2] + currentRow[j - 1]
        );
        continue;
      }

      if (isNotAtFillingStagesVertical && isIndexZeroHorizontalRow) {
        currentRow.push(matrix[i - 2][j] + matrix[i - 1][j]);
        continue;
      }

      if (isNotAtFillingStagesVertical && isIndexOneHorizontalRow) {
        currentRow.push(
          currentRow[j - 1] + matrix[i - 1][j - 1] + matrix[i - 1][j]
        );
        continue;
      }

      if (isNotAtFillingStagesVertical && isNotAtFillingStagesHorizontal) {
        const cellValue =
          matrix[i - 1][j] +
          matrix[i - 2][j] +
          currentRow[j - 1] +
          currentRow[j - 2];
        currentRow.push(cellValue);
        continue;
      }
    }

    matrix.push(currentRow);
  }
  return matrix[verticalScalePoint][horizontalScalePoint];
};

const getAllowedStepsModel = (currentPosition: number) => {
  const isIndexZeroRow = currentPosition === 0;
  const isIndexOneRow = currentPosition === 1;
  const isNotAtFillingStages = !isIndexZeroRow && !isIndexOneRow;

  return {
    isIndexZeroRow,
    isIndexOneRow,
    isNotAtFillingStages,
  };
};