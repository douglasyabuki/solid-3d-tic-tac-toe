import { Accessor } from "solid-js";
import { players, Players } from "../../../utils/util-game";
import { BoardSizeSwitcher } from "./board-size-switcher/BoardSizeSwitcher";
import { Counter } from "./counter/Counter";
import style from "./scoreboard.module.css";

interface Scoreboard {
  boardSize: Accessor<number>;
  changeBoardSize: (n: number) => void;
  currentPlayer: Accessor<string>;
  score: Accessor<Record<Players, number>>;
}

export function Scoreboard({
  boardSize,
  changeBoardSize,
  currentPlayer,
  score,
}: Scoreboard) {
  return (
    <div class={style["scoreboard-container"]}>
      <div class={style["scoreboard"]}>
        <h3>3D Tic-Tac-Toe</h3>
        <div class={style["counters-container"]}>
          <Counter
            player={players.red}
            currentPlayer={currentPlayer}
            score={score}
          />
          <BoardSizeSwitcher 
            boardSize={boardSize}
            changeBoardSize={changeBoardSize}
          />
          <Counter
            player={players.blue}
            currentPlayer={currentPlayer}
            score={score}
          />
        </div>
      </div>
    </div>
  );
}
