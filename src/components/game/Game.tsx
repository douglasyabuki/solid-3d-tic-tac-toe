import { createEffect, createSignal } from "solid-js";
import { useDrag } from "../../primitives/useDrag";
import { CellValue, checkWin, players, Players } from "../../utils/util-game";
import { Board } from "./board/Board";
import style from "./game.module.css";
import { Scoreboard } from "./scoreboard/Scoreboard";
import { WinnerDialog } from "./winner-dialog/WinnerDialog";

const initialScore: Record<Players, number> = {
  blue: 0,
  red: 0,
};

export function Game() {
  const [boardSize, setBoardSize] = createSignal(3);
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
  const [currentPlayer, setCurrentPlayer] = createSignal<Players>("blue");
  const [score, setScore] = createSignal(initialScore);
  const [winner, setWinner] = createSignal<Players | null>(null);
  const { transformStyle, cursorStyle } = useDrag(`.${style.game}`);

  createEffect(() => {
    const currentWinner = checkWin(boards());
    setWinner(currentWinner);
    if (currentWinner) {
      setScore((prev) => ({
        ...prev,
        [players[currentWinner!]]: prev[players[currentWinner!]] + 1,
      }));
    }
  });

  function startNewGame() {
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
  }

  function resetScore() {
    setScore({
      blue: 0,
      red: 0,
    });
  }

  function changeBoardSize(newSize: number) {
    setBoardSize(newSize);
    startNewGame();
    resetScore();
  }

  function handleCellClick(boardId: number, rowId: number, colId: number) {
    if (winner()) {
      return;
    }
    if (boards()[boardId][rowId][colId]) return;
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
    <>
      <div class={style["game-container"]}>
        <Scoreboard
          boardSize={boardSize}
          currentPlayer={currentPlayer}
          score={score}
          changeBoardSize={changeBoardSize}
        />
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
              boardSize={boardSize}
            />
          ))}
        </div>
      </div>
      <WinnerDialog winner={winner} startNewGame={startNewGame} />
    </>
  );
}
