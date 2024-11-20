import { Accessor } from "solid-js";
import style from "./cell.module.css";

interface Cell {
  value: string;
  handleContextMenu: (e: MouseEvent) => void;
  handleClick: () => void;
  boardSize: Accessor<Number>;
}

export function Cell({
  value,
  handleContextMenu,
  handleClick,
  boardSize,
}: Cell) {
  return (
    <div
      role="button"
      classList={{ [style.cell]: true, [style[`size-${boardSize()}`]]: true }}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.front]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.back]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.top]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.bottom]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.left]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.right]: true,
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
    </div>
  );
}
