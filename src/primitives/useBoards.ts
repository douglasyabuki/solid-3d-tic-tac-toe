import { Accessor, createSignal } from "solid-js";
import { CellValue, Players } from "../utils/util-game";

export function useBoards(boardSize: Accessor<number>) {
  const [boards, setBoards] = createSignal<CellValue[][][]>(
    Array(boardSize())
      .fill(0)
      .map(() =>
        Array(boardSize())
          .fill(0)
          .map(() => Array(boardSize()).fill(""))
      )
  );
  const [translatedBoards, setTranslatedBoards] = createSignal<boolean[]>(
    Array(boardSize()).fill(false)
  );

  const startNewGame = () => {
    setBoards(
      Array(boardSize())
        .fill(0)
        .map(() =>
          Array(boardSize())
            .fill(0)
            .map(() => Array(boardSize()).fill(""))
        )
    );
    setTranslatedBoards(Array(boardSize()).fill(false));
  };

  const markCell = (
    boardId: number,
    rowId: number,
    colId: number,
    player: Players
  ) => {
    const newBoards = [...boards()];
    newBoards[boardId][rowId][colId] = player;
    setBoards(newBoards);
  };

  const translateBoard = (boardId: number) => {
    setTranslatedBoards((prev) =>
      prev.map((item, id) => (id === boardId ? !item : item))
    );
  };

  return {
    boards,
    translatedBoards,
    translateBoard,
    startNewGame,
    markCell,
  };
}
