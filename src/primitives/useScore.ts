import { Accessor, createEffect, createSignal } from "solid-js";
import { CellValue, checkWin, Players } from "../utils/util-game";

const initialScore: Record<Players, number> = {
  blue: 0,
  red: 0,
};

export function useScore(boards: Accessor<CellValue[][][]>) {
  const [score, setScore] = createSignal(initialScore);
  const [winner, setWinner] = createSignal<Players | null>(null);

  createEffect(() => {
    const currentWinner = checkWin(boards());
    setWinner(currentWinner);
    if (currentWinner) {
      addScore(currentWinner);
    }
  });

  const addScore = (player: Players) => {
    setScore((prev) => ({
      ...prev,
      [player]: prev[player] + 1,
    }));
  };

  const resetScore = () => {
    setScore(initialScore);
  };

  return {
    score,
    resetScore,
    winner,
  };
}
