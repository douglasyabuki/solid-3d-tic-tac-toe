import { Accessor } from "solid-js";
import { Portal } from "solid-js/web";
import { Players } from "../../../utils/util-game";
import style from "./winner.module.css";

interface WinnerDialog {
  winner: Accessor<Players | null>;
  startNewGame: () => void;
}

export function WinnerDialog({ winner, startNewGame }: WinnerDialog) {
  return (
    <>
      {winner() && (
        <Portal mount={document.querySelector("body")!}>
          <span
            class={style["winner-dialog-container"]}
            role="button"
            onClick={startNewGame}
          >
            <div class={style.dialog}>
              <h3 class={style["dialog-label"]}>
                Player
                <b
                  classList={{
                    [style.player]: true,
                    [style[winner()!]]: true,
                  }}
                >
                  {winner()?.toUpperCase()}
                </b>
                wins
              </h3>
              <p>Click anywhere to start again</p>
            </div>
          </span>
        </Portal>
      )}
    </>
  );
}
