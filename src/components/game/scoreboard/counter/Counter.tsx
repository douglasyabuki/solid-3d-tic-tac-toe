import { Accessor } from "solid-js";
import { Players } from "../../../../utils/util-game";
import style from "./counter.module.css";

interface Counter {
  player: Players;
  score: Accessor<Record<Players, number>>;
  currentPlayer: Accessor<string>;
}

export function Counter({ player, currentPlayer, score }: Counter) {
  return (
    <div
      classList={{
        [style.counter]: true,
        [style[player]]: true,
        [style["current-player"]]: currentPlayer() === player,
      }}
    >
      <h3>{score()[player]}</h3>
    </div>
  );
}
