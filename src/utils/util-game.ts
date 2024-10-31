function checkLine(
  boards: string[][][],
  positions: [number, number, number][] | number[][]
): string | null {
  const firstValue = boards[positions[0][0]][positions[0][1]][positions[0][2]];
  if (firstValue === "") return null;

  return positions.every(([x, y, z]) => boards[x][y][z] === firstValue)
    ? firstValue
    : null;
}

export function checkWin(boards: string[][][]): string | null {
  const size = boards.length;

  for (let currentBoard = 0; currentBoard < size; currentBoard++) {
    for (let currentRow = 0; currentRow < size; currentRow++) {
      const row = checkLine(
        boards,
        Array(size)
          .fill(0)
          .map((_, col) => [currentBoard, currentRow, col])
      );
      if (row) return row;
    }
    for (let currentCol = 0; currentCol < size; currentCol++) {
      const col = checkLine(
        boards,
        Array(size)
          .fill(0)
          .map((_, row) => [currentBoard, row, currentCol])
      );
      if (col) return col;
    }
    const diag1 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [currentBoard, i, i])
    );
    if (diag1) return diag1;
    const diag2 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [currentBoard, i, size - 1 - i])
    );
    if (diag2) return diag2;
  }

  for (let currentColumn = 0; currentColumn < size; currentColumn++) {
    for (let currentRow = 0; currentRow < size; currentRow++) {
      const vertical = checkLine(
        boards,
        Array(size)
          .fill(0)
          .map((_, currentBoard) => [currentBoard, currentColumn, currentRow])
      );
      if (vertical) return vertical;
    }
  }

  const mainDiagonals = [
    Array(size)
      .fill(0)
      .map((_, i) => [i, i, i]),
    Array(size)
      .fill(0)
      .map((_, i) => [i, i, size - 1 - i]),
    Array(size)
      .fill(0)
      .map((_, i) => [i, size - 1 - i, i]),
    Array(size)
      .fill(0)
      .map((_, i) => [i, size - 1 - i, size - 1 - i]),
  ];

  for (const diagonal of mainDiagonals) {
    const result = checkLine(boards, diagonal);
    if (result) return result;
  }

  for (let currentRow = 0; currentRow < size; currentRow++) {
    const planeDiag1 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, i, currentRow])
    );
    if (planeDiag1) return planeDiag1;

    const planeDiag2 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, size - 1 - i, currentRow])
    );
    if (planeDiag2) return planeDiag2;
  }

  for (let currentColumn = 0; currentColumn < size; currentColumn++) {
    const planeDiag1 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, currentColumn, i])
    );
    if (planeDiag1) return planeDiag1;

    const planeDiag2 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, currentColumn, size - 1 - i])
    );
    if (planeDiag2) return planeDiag2;
  }

  for (let currentBoard = 0; currentBoard < size; currentBoard++) {
    const planeDiag1 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [currentBoard, i, i])
    );
    if (planeDiag1) return planeDiag1;

    const planeDiag2 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [currentBoard, i, size - 1 - i])
    );
    if (planeDiag2) return planeDiag2;
  }

  for (let currentRow = 0; currentRow < size; currentRow++) {
    const slantDiag1 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, currentRow, i])
    );
    if (slantDiag1) return slantDiag1;

    const slantDiag2 = checkLine(
      boards,
      Array(size)
        .fill(0)
        .map((_, i) => [i, currentRow, size - 1 - i])
    );
    if (slantDiag2) return slantDiag2;
  }

  for (let currentBoard = 0; currentBoard < size; currentBoard++) {
    for (let currentRow = 0; currentRow < size; currentRow++) {
      const slantDiag = checkLine(
        boards,
        Array(size)
          .fill(0)
          .map((_, i) => [i, currentRow, currentBoard])
      );
      if (slantDiag) return slantDiag;
    }
  }

  return null;
}
