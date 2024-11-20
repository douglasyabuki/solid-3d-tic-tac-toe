import { createSignal } from "solid-js";

export type ViewMode = "plain" | "3d";

export function useViewMode() {
  const [viewMode, setViewMode] = createSignal<ViewMode>("3d");

  const changeViewMode = () => {
    setViewMode(viewMode() === "3d" ? "plain" : "3d");
  };

  return { viewMode, changeViewMode };
}
