import { Accessor } from "solid-js";
import { ViewMode } from "../../../primitives/useViewMode";
import { players, Players } from "../../../utils/util-game";
import { BoardSizeSwitcher } from "./board-size-switcher/BoardSizeSwitcher";
import { Counter } from "./counter/Counter";
import style from "./scoreboard.module.css";
import { ViewModeSwitcher } from "./view-mode-switcher/ViewModeSwitcher";

interface Scoreboard {
  boardSize: Accessor<number>;
  changeBoardSize: (n: number) => void;
  changeViewMode: () => void;
  currentPlayer: Accessor<string>;
  score: Accessor<Record<Players, number>>;
  viewMode: Accessor<ViewMode>;
}

export function Scoreboard({
  boardSize,
  changeBoardSize,
  changeViewMode,
  currentPlayer,
  score,
  viewMode,
}: Scoreboard) {
  return (
    <div class={style["scoreboard-container"]}>
      <div class={style["scoreboard"]}>
        <h3>3D Tic-Tac-Toe</h3>
        <ViewModeSwitcher viewMode={viewMode} changeViewMode={changeViewMode} />
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
