import style from "./cell.module.css";

interface Cell {
  value: string;
  handleContextMenu: (e: MouseEvent) => void;
  handleClick: () => void;
}

export function Cell({ value, handleContextMenu, handleClick }: Cell) {
  return (
    <div
      role="button"
      class={style.cell}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <div
        classList={{
          [style.face]: true,
          [style.front]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style.back]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style.top]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style.bottom]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style.left]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
      <div
        classList={{
          [style.face]: true,
          [style.right]: true,
          [style.marked]: !!value,
          [style[`player${value === "red" ? "1" : "2"}`]]: !!value,
        }}
      ></div>
    </div>
  );
}
