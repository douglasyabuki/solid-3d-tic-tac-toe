import { createSignal } from "solid-js";
import style from "./board.module.css";
import { Cell } from "./cell/Cell";

interface Board {
  board: string[][];
  boardId: number;
}

export function Board({ board, boardId }: Board) {
  const [isTranslated, setIsTranslated] = createSignal(false);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setIsTranslated(!isTranslated());
  };

  return (
    <div
      classList={{
        [style.board]: true,
        [style[`translated-${boardId + 1}`]]: !!isTranslated(),
      }}
    >
      {board.map((row, rowId) =>
        row.map((col, colId) => (
          <Cell
            value={col}
            rowId={rowId}
            colId={colId}
            handleContextMenu={handleContextMenu}
          />
        ))
      )}
    </div>
  );
}
