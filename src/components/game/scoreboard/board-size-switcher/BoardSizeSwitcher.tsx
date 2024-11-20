import { Accessor } from "solid-js";
import style from "./board-size-switcher.module.css";

interface BoardSizeSwitcher {
  boardSize: Accessor<number>;
  changeBoardSize: (n: number) => void;
}

export function BoardSizeSwitcher({
  boardSize,
  changeBoardSize,
}: BoardSizeSwitcher) {
  return (
    <div class={style["board-size-switcher"]}>
      <button onClick={() => changeBoardSize(boardSize() === 4 ? 3 : 4)}>
        {Array(3).fill(boardSize()).join(" x ")}
      </button>
    </div>
  );
}
