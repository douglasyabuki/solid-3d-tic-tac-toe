import { Accessor } from "solid-js";
import { ViewMode } from "../../../primitives/useViewMode";
import style from "./board.module.css";
import { Cell } from "./cell/Cell";

interface Board {
  board: string[][];
  boardId: number;
  boardSize: Accessor<Number>;
  onCellClick: (boardId: number, rowId: number, colId: number) => void;
  onTranslate: () => void;
  translatedBoards: Accessor<boolean[]>;
  viewMode: Accessor<ViewMode>;
}

export function Board({
  board,
  boardId,
  boardSize,
  onCellClick,
  onTranslate,
  translatedBoards,
  viewMode,
}: Board) {
  const onContextMenu = (e: MouseEvent) => {
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
            boardSize={boardSize}
            onClick={() => onCellClick(boardId, rowId, colId)}
            onContextMenu={onContextMenu}
            value={col}
            viewMode={viewMode}
          />
        ))
      )}
    </div>
  );
}
