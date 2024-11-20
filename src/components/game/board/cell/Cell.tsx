import { Accessor } from "solid-js";
import style from "./cell.module.css";

interface Cell {
  value: string;
  onContextMenu: (e: MouseEvent) => void;
  onClick: () => void;
  boardSize: Accessor<Number>;
}

export function Cell({
  value,
  onContextMenu,
  onClick,
  boardSize,
}: Cell) {
  return (
    <div
      role="button"
      classList={{ [style.cell]: true, [style[`size-${boardSize()}`]]: true }}
      onContextMenu={onContextMenu}
      onClick={onClick}
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
