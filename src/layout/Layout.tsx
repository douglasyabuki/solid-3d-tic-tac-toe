import { JSX } from "solid-js";
import style from "./layout.module.css";

interface Layout {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: Layout) {
  return (
    <section class={style.layout}>
      <main class={style.main}>{children}</main>
    </section>
  );
}
