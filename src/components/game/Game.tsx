import { createEffect, createSignal } from "solid-js";
import { useDrag } from "../../primitives/useDrag";
import { CellValue, checkWin, players, Players } from "../../utils/util-game";
import { Board } from "./board/Board";
import style from "./game.module.css";
import { Scoreboard } from "./scoreboard/Scoreboard";

export function Game() {
  const [boards, setBoards] = createSignal<CellValue[][][]>(
    Array(3)
      .fill(0)
      .map(() =>
        Array(3)
          .fill(0)
          .map(() => Array(3).fill(""))
      )
  );
  const [translatedBoards, setTranslatedBoards] = createSignal<boolean[]>(
    Array(3).fill(false)
  );
  const [currentPlayer, setCurrentPlayer] = createSignal<Players>("blue");
  const [score, setScore] = createSignal<Record<Players, number>>({
    blue: 0,
    red: 0,
  });
  const { transformStyle, cursorStyle } = useDrag(`.${style.game}`);

  let currentWinner: Players | null = null;

  createEffect(() => {
    if (checkWin(boards())) {
      currentWinner = checkWin(boards());
      if (currentWinner !== null) {
        setScore((prev) => ({
          ...prev,
          [players[currentWinner!]]: prev[players[currentWinner!]] + 1,
        }));
      }
    }
  });

  function handleCellClick(boardId: number, rowId: number, colId: number) {
    if (boards()[boardId][rowId][colId]) return;
    if (currentWinner) {
      return;
    }
    const newBoards = [...boards()];
    newBoards[boardId][rowId][colId] = currentPlayer();
    setBoards(newBoards);
    setCurrentPlayer(currentPlayer() === "blue" ? "red" : "blue");
  }

  function onTranslate(boardId: number) {
    setTranslatedBoards((prev) =>
      prev.map((item, id) => (id === boardId ? !item : item))
    );
  }

  return (
    <div class={style["game-container"]}>
      <Scoreboard currentPlayer={currentPlayer} score={score} />
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
            onTranslate={() => onTranslate(boardId)}
            translatedBoards={translatedBoards}
          />
        ))}
      </div>
    </div>
  );
}
