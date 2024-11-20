import { createSignal } from "solid-js";
import { players, Players } from "../utils/util-game";

export function usePlayers() {
  const [currentPlayer, setCurrentPlayer] = createSignal<Players>("blue");

  const switchPlayer = () => {
    setCurrentPlayer((prev) =>
      prev === players.blue ? players.red : players.blue
    );
  };

  return {
    currentPlayer,
    switchPlayer,
  };
}
