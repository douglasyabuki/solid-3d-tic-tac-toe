import { createSignal } from "solid-js";
import { useDrag } from "../../primitives/useDrag";
import { Board } from "./board/Board";
import style from "./game.module.css";

export function Game() {
  const [boards, setBoards] = createSignal(
    Array(3)
      .fill(0)
      .map(() =>
        Array(3)
          .fill(0)
          .map(() => Array(3).fill(""))
      )
  );

  const { transformStyle, cursorStyle } = useDrag(`.${style.game}`);

  return (
    <div
      class={style.game}
      style={{
        transform: transformStyle(),
        cursor: cursorStyle(),
      }}
    >
      {boards().map((board, id) => (
        <Board board={board} boardId={id} />
      ))}
    </div>
  );
}
