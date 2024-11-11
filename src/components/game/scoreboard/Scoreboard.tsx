import { Accessor } from "solid-js";
import { players, Players } from "../../../utils/util-game";
import { Counter } from "./counter/Counter";
import style from "./scoreboard.module.css";

interface Board {
  currentPlayer: Accessor<string>;
  score: Accessor<Record<Players, number>>;
}

export function Scoreboard({ currentPlayer, score }: Board) {
  return (
    <div class={style["scoreboard-container"]}>
      <div class={style["scoreboard"]}>
        <h3>Scoreboard</h3>
        <div
          style={{
            display: "flex",
            "align-items": "center",
            "justify-content": "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <Counter
            player={players.red}
            currentPlayer={currentPlayer}
            score={score}
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
