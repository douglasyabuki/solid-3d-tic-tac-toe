import { ParentProps } from "solid-js";
import { Layout } from "./layout/Layout";

export function App(props: ParentProps) {
  return <Layout>{props.children}</Layout>;
}
