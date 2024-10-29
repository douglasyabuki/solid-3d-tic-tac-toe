import { Game } from "../../components/game/Game";
import style from "./home.module.css";

export function Home() {
  return (
    <div class={style.home}>
      <Game />
    </div>
  );
}
