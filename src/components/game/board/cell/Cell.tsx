import style from "./cell.module.css";

interface Cell {
  value: string;
  rowId: number;
  colId: number;
  handleContextMenu: (e: MouseEvent) => void;
}

export function Cell({ value, rowId, colId, handleContextMenu }: Cell) {
  return (
    <div role="button" class={style.cell} onContextMenu={handleContextMenu}>
      <div class={`${style.face} ${style.front}`}></div>
      <div class={`${style.face} ${style.back}`}></div>
      <div class={`${style.face} ${style.top}`}></div>
      <div class={`${style.face} ${style.bottom}`}></div>
      <div class={`${style.face} ${style.left}`}></div>
      <div class={`${style.face} ${style.right}`}></div>
    </div>
  );
}
