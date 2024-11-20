import { Accessor } from "solid-js";
import { ViewMode } from "../../../../primitives/useViewMode";
import style from "./cell.module.css";

interface Cell {
  boardSize: Accessor<Number>;
  onClick: () => void;
  onContextMenu: (e: MouseEvent) => void;
  value: string;
  viewMode: Accessor<ViewMode>;
}

export function Cell({
  value,
  onContextMenu,
  onClick,
  boardSize,
  viewMode,
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
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.back]: true,
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.top]: true,
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.bottom]: true,
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.left]: true,
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style[`size-${boardSize()}`]]: true,
          [style.right]: true,
          [style.compact]: viewMode() === "plain",
          [style.marked]: !!value,
          [style[`player-${value}`]]: !!value,
        }}
      ></div>
    </div>
  );
}
