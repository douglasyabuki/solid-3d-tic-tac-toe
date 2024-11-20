import { Accessor } from "solid-js";
import style from "./board.module.css";
import { Cell } from "./cell/Cell";

interface Board {
  board: string[][];
  boardId: number;
  boardSize: Accessor<Number>;
  handleCellClick: (boardId: number, rowId: number, colId: number) => void;
  onTranslate: () => void;
  translatedBoards: Accessor<boolean[]>;
}

export function Board({
  board,
  boardId,
  boardSize,
  handleCellClick,
  onTranslate,
  translatedBoards,
}: Board) {
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    onTranslate();
  };

  return (
    <div
      classList={{
        [style.board]: true,
        [style[`size-${boardSize()}`]]: true,
        [style[`translated-${boardId + 1}`]]: !!translatedBoards()[boardId],
      }}
    >
      {board.map((row, rowId) =>
        row.map((col, colId) => (
          <Cell
            value={col}
            handleContextMenu={handleContextMenu}
            handleClick={() => handleCellClick(boardId, rowId, colId)}
            boardSize={boardSize}
          />
        ))
      )}
    </div>
  );
}
