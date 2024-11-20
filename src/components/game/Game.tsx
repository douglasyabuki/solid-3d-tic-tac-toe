import { createSignal } from "solid-js";
import { useBoards } from "../../primitives/useBoards";
import { useDrag } from "../../primitives/useDrag";
import { usePlayers } from "../../primitives/usePlayers";
import { useScore } from "../../primitives/useScore";
import { Board } from "./board/Board";
import style from "./game.module.css";
import { Scoreboard } from "./scoreboard/Scoreboard";
import { WinnerDialog } from "./winner-dialog/WinnerDialog";

export function Game() {
  const [boardSize, setBoardSize] = createSignal(3);
  const { boards, markCell, startNewGame, translateBoard, translatedBoards } =
    useBoards(boardSize);
  const { currentPlayer, switchPlayer } = usePlayers();
  const { score, resetScore, winner } = useScore(boards);
  const { transformStyle, cursorStyle } = useDrag(`.${style.game}`);

  function changeBoardSize(newSize: number) {
    setBoardSize(newSize);
    startNewGame();
    resetScore();
  }

  function onCellClick(boardId: number, rowId: number, colId: number) {
    if (winner()) {
      return;
    }
    if (boards()[boardId][rowId][colId]) return;
    markCell(boardId, rowId, colId, currentPlayer());
    switchPlayer();
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
              onCellClick={onCellClick}
              onTranslate={() => translateBoard(boardId)}
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
