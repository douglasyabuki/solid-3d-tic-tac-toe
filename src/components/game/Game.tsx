import { createSignal } from "solid-js";
import { useDrag } from "../../primitives/useDrag";
import { Board } from "./board/Board";
import style from "./game.module.css";

type Players = "blue" | "red";

export function Game() {
  const [boards, setBoards] = createSignal(
    Array(3)
      .fill(0)
      .map(() =>
        Array(3)
          .fill(0)
          .map(() => Array(3).fill(""))
      )
  );
  const [currentPlayer, setCurrentPlayer] = createSignal<Players>("blue");
  const { transformStyle, cursorStyle } = useDrag(`.${style.game}`);

  function handleCellClick(boardId: number, rowId: number, colId: number) {
    if (boards()[boardId][rowId][colId]) return;

    const newBoards = [...boards()];
    newBoards[boardId][rowId][colId] = currentPlayer();
    setBoards(newBoards);
    setCurrentPlayer(currentPlayer() === "blue" ? "red" : "blue");
  }

  return (
    <div
      class={style.game}
      style={{
        transform: transformStyle(),
        cursor: cursorStyle(),
      }}
    >
      {boards().map((board, boardId) => (
        <Board
          board={board}
          boardId={boardId}
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  );
}
