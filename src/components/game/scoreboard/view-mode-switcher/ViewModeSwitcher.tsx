import { Accessor } from "solid-js";
import { CompressIcon, ExpandIcon } from "../../../../icons/Icons";
import { ViewMode } from "../../../../primitives/useViewMode";
import style from "./view-mode-switcher.module.css";

interface ViewModeSwitcher {
  viewMode: Accessor<ViewMode>;
  changeViewMode: () => void;
}

export function ViewModeSwitcher({
  viewMode,
  changeViewMode,
}: ViewModeSwitcher) {
  return (
    <div class={style["view-mode-switcher"]}>
      <button onClick={changeViewMode}>
        {viewMode() === "3d" ? <CompressIcon /> : <ExpandIcon />}
      </button>
    </div>
  );
}
